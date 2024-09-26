import { PropsWithCn } from '@/lib/types';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<PropsWithCn>;

export function Chip({ children, className }: Props) {
  return (
    <div
      className={cn(
        'px-4 py-2 text-sm font-medium flex items-center gap-2 rounded-full border bg-secondary/50 w-fit',
        className,
      )}
    >
      {children}
    </div>
  );
}
