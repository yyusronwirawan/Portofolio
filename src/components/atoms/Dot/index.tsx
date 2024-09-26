import { PropsWithCn } from '@/lib/types';
import { cn } from '@/lib/utils';

type Props = {
  variant?: 'default' | 'muted' | 'success' | 'warning' | 'danger';
};

export function Dot({ className, variant = 'default' }: PropsWithCn<Props>) {
  return (
    <div
      className={cn(
        'size-2 rounded-full',
        variant === 'default' && 'bg-white',
        variant === 'muted' && 'bg-muted-foreground',
        variant === 'success' && 'bg-green-500',
        variant === 'warning' && 'bg-orange-500',
        variant === 'danger' && 'bg-red-500',
        className
      )}
    />
  );
}
