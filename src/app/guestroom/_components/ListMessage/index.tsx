'use client';

import { Atoms } from '@/components/atoms';
import { DialogConfirm } from '@/components/organisms';
import { cn, formatTimeSince } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useMemo, useState } from 'react';
import { useMessages } from '@/hooks';
import { Message } from '@/lib/types';
import { Trash2 } from 'lucide-react';

type MessageItemProps = {
  data: Message;
  onDelete: (id: string) => void;
  isDeleting: boolean;
};

function MessageItem({ data, onDelete, isDeleting }: MessageItemProps) {
  const { data: session } = useSession();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const isMe = useMemo(() => data.email === session?.user?.email, [data.email, session]);
  const { isAuthor, isAuthorMessage } = useMemo(
    () => ({
      isAuthor: session?.user?.email === process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
      isAuthorMessage: data.email === process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
    }),
    [data.email, session?.user?.email]
  );

  return (
    <>
      <div className={cn('flex gap-2', isMe && 'flex-row-reverse')}>
        <Atoms.Avatar src={data.image} className='size-8 lg:size-10' />
        <div className={cn('flex flex-col gap-1', isMe && 'items-end')}>
          <div className='flex items-center gap-1'>
            <span className='text-sm font-semibold opacity-85 truncate'>
              {isMe ? 'You' : data.name}
            </span>
            {isAuthorMessage && <Atoms.Verified />}
            <span className='text-xs text-muted-foreground hidden lg:flex'>
              {formatTimeSince(new Date(data.created_at))}
            </span>
            {(isMe || isAuthor) && (
              <Atoms.Button
                size='icon'
                variant='ghost'
                className='p-0 size-6'
                onClick={() => setDeleteDialogOpen(true)}
              >
                <Trash2 className='size-4 text-destructive dark:text-red-500' />
              </Atoms.Button>
            )}
          </div>
          <p
            className={cn(
              'text-sm font-medium px-3 py-2 lg:px-4 lg:py-3 rounded-2xl bg-secondary rounded-tl-none w-fit',
              isMe && 'rounded-tl-2xl rounded-tr-none',
            )}
          >
            {data.message}
          </p>
          <span className='text-xs text-muted-foreground lg:hidden'>
            {formatTimeSince(new Date(data.created_at))}
          </span>
        </div>
      </div>

      <DialogConfirm
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title='Are you sure want to delete this message?'
        approveLabel='Delete'
        approveLoading={isDeleting}
        onApprove={() => {
          onDelete(data.id);
          setDeleteDialogOpen(false);
        }}
      />
    </>
  );
}

export function ListMessage() {
  const { messages, onDeleteMessage, isDeleting } = useMessages();

  return (
    <div
      id='messages-wrapper'
      className='h-[60vh] lg:max-h-full overflow-auto flex flex-col gap-5 -mr-5 pr-5 py-4'
    >
      {messages.map(item => (
        <MessageItem key={item.id} data={item} onDelete={onDeleteMessage} isDeleting={isDeleting} />
      ))}
    </div>
  );
}
