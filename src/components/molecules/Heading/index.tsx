'use client';

import { Atoms } from '@/components/atoms';
import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  description: string;
  withBackButton?: boolean;
};

export function Heading({ title, description, withBackButton = false }: Props) {
  const router = useRouter();

  return (
    <div className='space-y-2'>
      {withBackButton && (
        <Atoms.Button
          variant='ghost'
          className='px-0 !bg-transparent flex items-center gap-2 hover:gap-3 transition-all duration-300 text-muted-foreground'
          onClick={router.back}
        >
          <ArrowLeftCircle className='size-4' /> Back
        </Atoms.Button>
      )}
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <h2 className='text-sm lg:text-base text-muted-foreground'>
        {description}
      </h2>
    </div>
  );
}
