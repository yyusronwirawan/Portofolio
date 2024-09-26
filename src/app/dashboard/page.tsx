import { Atoms } from '@/components/atoms';
import { Heading } from '@/components/molecules';
import { Metadata } from 'next';
import { WeeklyStats } from './_components';

export const metadata: Metadata = {
  title: 'Dashboard - Yusron Wirawanto.',
  description: 'My personal dashboard that summarized working activities.',
};

export default function DashboardPage() {
  return (
    <main data-aos='fade-up' className='w-full space-y-6'>
      <Heading
        title='Dashboard'
        description='My personal dashboard that summarized working activities.'
      />
      <Atoms.Separator />
      <WeeklyStats />
    </main>
  );
}
