'use client';

import { Atoms } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { useHydration } from '@/hooks';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function ButtonGitHub(props: ButtonProps) {
  const { theme } = useTheme();
  const { isHydrated } = useHydration();

  if (!isHydrated) return null;

  return (
    <Atoms.Button size='lg' variant='outline' {...props}>
      <Image
        src={`/svgs/github${theme === 'dark' ? '-white' : ''}.svg`}
        height={22}
        width={22}
        alt='github'
        className='mr-2'
      />
      Sign in with GitHub
    </Atoms.Button>
  );
}
