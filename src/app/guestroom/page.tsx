import { auth } from '@/auth';
import { Atoms } from '@/components/atoms';
import { Card, CardHeader, Heading } from '@/components/molecules';
import { Metadata, Viewport } from 'next';
import { SessionProvider } from 'next-auth/react';
import { ButtonSignIn, InputMessage, ListMessage } from './_components';

export const metadata: Metadata = {
  title: 'Guestroom - Yusron Wirawanto',
  description: 'Leave whatever you want to say. Feedbacks, suggestions, questions, or anything else!',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1, // prevent zoom-in for input field in mobile device
};

export default async function GuestroomPage() {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <main data-aos='fade-up' className='w-full flex flex-col gap-6'>
        <Heading
          title='Guestroom'
          description='Leave whatever you want to say. Feedbacks, suggestions, questions, or anything else!'
        />
        <Atoms.Separator />
        <Card className='bg-card h-full p-0'>
          <CardHeader className='h-full justify-between space-y-2 pt-0'>
            <ListMessage />
            <ButtonSignIn />
            <InputMessage />
          </CardHeader>
        </Card>
      </main>
    </SessionProvider>
  );
}
