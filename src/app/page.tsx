import { Atoms } from '@/components/atoms';
import { CarouselSkills, CarouselProjects, CardContact } from '@/components/organisms';
import { MY_PROFILE } from '@/lib/consts';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main data-aos='fade-up' className='space-y-6 w-full overflow-hidden'>
      <h1 className='text-2xl lg:text-3xl font-semibold'>
        Hi, I&apos;m {MY_PROFILE.nickName} 👋
      </h1>

      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6'>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='muted' />
          <span className='text-muted-foreground text-sm'>
            Based in {MY_PROFILE.address}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Atoms.Dot variant='muted' />
          <span className='text-muted-foreground text-sm'>
            {MY_PROFILE.status2}
          </span>
        </div>
      </div>

      <p className='leading-6 opacity-85'>
        {MY_PROFILE.description}
      </p>

      <Atoms.Separator />
      <div className='flex items-center gap-4 justify-between'>
        <h2 className='font-semibold text-lg opacity-85'>Projects I&apos;ve Worked On</h2>
        <Atoms.Button variant='ghost' className='opacity-85' asChild>
          <Link href='/projects'>
            View All <ArrowRight className='size-4 ml-2' />
          </Link>
        </Atoms.Button>
      </div>
      <CarouselProjects />

      <Atoms.Separator />
      <h2 className='font-semibold text-lg opacity-85'>Tools I&apos;ve Used</h2>
      <CarouselSkills />

      <Atoms.Separator />
      <div className='space-y-3'>
        <h2 className='font-semibold text-lg opacity-85'>What I&apos;ve Been Working On</h2>
        <p className='opacity-85'>
          I assist brands, companies, institutions, and startups in creating exceptional digital experiences for their businesses through strategic development services.
        </p>
      </div>
      <CardContact />
    </main>
  );
}
