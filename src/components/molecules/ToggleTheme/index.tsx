'use client';

import { Atoms } from '@/components/atoms';
import { Sun, MoonStar } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Atoms.Button id='toggle-theme' size='icon' variant='ghost' onClick={toggle}>
      <Sun className='size-5 hidden dark:block' />
      <MoonStar className='size-5 block dark:hidden' />
    </Atoms.Button>
  );
}
