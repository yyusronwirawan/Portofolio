'use client';

import { PropsWithCn } from '@/lib/types';
import { cn } from '@/lib/utils';
import { BadgeCheck } from 'lucide-react';

export function Verified({ className }: PropsWithCn) {
  return (
    <BadgeCheck className={cn('size-5 fill-blue-500 stroke-background', className)} />
  );
}
