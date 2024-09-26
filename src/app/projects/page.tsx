import { Atoms } from '@/components/atoms';
import { Heading } from '@/components/molecules';
import { CardProject } from '@/components/organisms';
import { MY_PROJECTS } from '@/lib/consts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects -Yusron Wirawanto',
  description: 'Several projects that I have worked on, both private and open source.',
};

export default function ProjectsPage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full'>
      <Heading
        title='Projects'
        description='Several projects that I have worked on, both private and open source.'
      />

      <Atoms.Separator />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {MY_PROJECTS.map((item, index) => (
          <div
            key={item.cname}
            data-aos='zoom-in'
            data-aos-delay={100 * index}
            data-aos-offset='-80'
            data-aos-once='true'
          >
            <CardProject data={item} headerClassName='aspect-video' />
          </div>
        ))}
      </div>
    </main>
  );
}
