import { Atoms } from '@/components/atoms';
import { ChipStack, Heading } from '@/components/molecules';
import { MY_PROJECTS } from '@/lib/consts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CarouselPortfolio } from '@/components/organisms';
import { Code2, Eye } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  params: { cname: string; };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { cname } = params;
  const project = MY_PROJECTS.find(x => x.cname === cname);

  return {
    title: `${project?.title || 'Project details'} - Yusron Wirawanto.`,
    description: project?.description || '',
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const { cname } = params;
  const project = MY_PROJECTS.find(x => x.cname === cname);

  if (!project) return notFound();

  return (
    <main data-aos='fade-up' className='space-y-6 w-full'>
      <Heading
        title={project.title}
        description={project.description}
        withBackButton
      />

      <Atoms.Separator />

      <div className='flex flex-col lg:flex-row items-start gap-4 w-full'>
        <CarouselPortfolio data={project} />

        <div className='flex flex-col gap-4 items-center lg:items-start w-full lg:w-2/5'>
          <div className='flex items-center gap-3'>
            <Atoms.Button variant='destructive' size='sm' asChild>
              <Link
                href={project.sourceCodeUrl || '#'}
                target='_blank'
                className={cn(!project.sourceCodeUrl && 'pointer-events-none opacity-50')}
              >
                <Code2 className='size-4 mr-2' /> Source Code
              </Link>
            </Atoms.Button>
            <Atoms.Button variant='secondary' size='sm' asChild>
              <Link
                href={project.demoUrl || ''}
                target='_blank'
                className={cn(!project.demoUrl && 'pointer-events-none opacity-50')}
              >
                <Eye className='size-4 mr-2' /> Live Demo
              </Link>
            </Atoms.Button>
          </div>

          <Atoms.Separator />

          <h3 className='text-sm font-semibold text-foreground/80'>Tech Stack:</h3>
          <div className='flex flex-wrap gap-2 justify-center lg:justify-start'>
            {project.stacks.map(stack => (
              <ChipStack key={stack.label} data={stack} className='text-xs py-2 px-3' />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
