'use client';

import { Atoms } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { useHydration } from '@/hooks';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function ButtonGoogle(props: ButtonProps) {
  const { theme } = useTheme();
  const { isHydrated } = useHydration();

  if (!isHydrated) return null;

  return (
    <Atoms.Button size='lg' variant={theme === 'dark' ? 'default' : 'outline'} {...props}>
      <Image
        src='/svgs/google.svg'
        height={22}
        width={22}
        alt='google'
        className='mr-2'
      />
      Sign in with Google
    </Atoms.Button>
  );
}
