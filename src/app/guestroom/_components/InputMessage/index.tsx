'use client';

import { Atoms } from '@/components/atoms';
import { Send } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useCallback, useMemo, useState } from 'react';
import { UserInfo } from './UserInfo';
import { useMessages } from '@/hooks';

export function InputMessage() {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');
  const { onSendMessage: send, isSending } = useMessages();

  const user = useMemo(() => session?.user, [session]);
  const disabled = useMemo(() => !message.trim(), [message]);

  const onSendMessage = useCallback(
    () => {
      if (disabled) return;

      send(message);
      setMessage('');
    },
    [disabled, message, send]
  );

  if (!user) return null;

  return (
    <div className='space-y-2'>
      <div className='flex items-center gap-2'>
        <Atoms.Input
          className='flex-1 w-full'
          placeholder='Type your message...'
          onChange={e => setMessage(e.target.value)}
          onKeyUp={e => e.key === 'Enter' && onSendMessage()}
          value={message}
        />
        <Atoms.Button
          size='icon'
          disabled={disabled}
          loading={isSending}
          onClick={onSendMessage}
        >
          <Send className='size-4' />
        </Atoms.Button>
      </div>

      <UserInfo user={user} />
    </div>
  );
}
