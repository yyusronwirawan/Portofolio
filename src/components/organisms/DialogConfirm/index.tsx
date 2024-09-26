'use client';

import { Atoms } from '@/components/atoms';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/molecules';
import { DialogProps } from '@radix-ui/react-dialog';

type Props = DialogProps & {
  title: string;
  description?: string;
  approveLabel?: string;
  rejectLabel?: string;
  approveLoading?: boolean;
  onApprove: () => void;
  onReject?: () => void;
};

export function DialogConfirm({
  open,
  onOpenChange,
  title,
  description = 'This action cannot be undone.',
  approveLabel = 'Confirm',
  rejectLabel = 'Cancel',
  approveLoading = false,
  onApprove,
  onReject
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className='gap-2'>
          <Atoms.Button
            variant='outline'
            onClick={() => {
              onOpenChange?.(false);
              onReject?.();
            }}
          >
            {rejectLabel}
          </Atoms.Button>
          <Atoms.Button
            variant='destructive'
            loading={approveLoading}
            onClick={onApprove}
          >
            {approveLabel}
          </Atoms.Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
