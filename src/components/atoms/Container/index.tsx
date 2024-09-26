import { PropsWithCn } from '@/lib/types';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export function Container({ children, className }: PropsWithChildren<PropsWithCn>) {
  return (
    <div className={cn('w-full max-w-6xl mx-auto p-6 pt-20 lg:py-8', className)}>
      {children}
    </div>
  );
}
