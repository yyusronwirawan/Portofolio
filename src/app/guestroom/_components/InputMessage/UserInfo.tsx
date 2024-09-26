import { Atoms } from '@/components/atoms';
import { LogOut } from 'lucide-react';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useTransition } from 'react';

type Props = {
  user: User;
};

export function UserInfo({ user }: Props) {
  const [isLoading, startSignOut] = useTransition();
  const onSignOut = () => startSignOut(async () => await signOut());

  return (
    <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3'>
      <p className='text-sm text-muted-foreground'>
        Signed in as {user.name} ({user.email})
      </p>
      <Atoms.Dot className='size-1 hidden lg:flex' variant='muted' />
      <Atoms.Button
        size='sm'
        variant='link'
        className='px-0 text-destructive dark:text-red-500 w-fit'
        loading={isLoading}
        onClick={onSignOut}
      >
        <LogOut className='size-4 mr-2' /> Sign Out
      </Atoms.Button>
    </div>
  );
}
