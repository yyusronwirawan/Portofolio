import { Atoms } from '@/components/atoms';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div data-aos='zoom-in' className='w-full flex items-center justify-center flex-col gap-4'>
      <Image
        src='/svgs/404.svg'
        height={280}
        width={280}
        alt='404'
      />
      <Atoms.Button variant='secondary' asChild>
        <Link href='/'>Back to home</Link>
      </Atoms.Button>
    </div>
  );
}
