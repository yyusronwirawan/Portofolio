import { Atoms } from '@/components/atoms';
import { Heading } from '@/components/molecules';
import { TabsAbout } from '@/components/organisms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Yusron Wirawanto.',
  description: 'An insightful glimpse into who I am - because every detail adds depth to the canvas of life.',
};

export default function AboutPage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full overflow-hidden'>
      <Heading
        title='About'
        description='An insightful glimpse into who I am - because every detail adds depth to the canvas of life.'
      />

      <Atoms.Separator />
      <TabsAbout />
    </main>
  );
}
