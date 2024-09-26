import { Atoms } from '@/components/atoms';
import { Card, CardContent, CardHeader } from '@/components/molecules';
import { Project, PropsWithCn } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = PropsWithCn<{
  headerClassName?: string;
  data: Project;
}>;

export function CardProject({ data, className, headerClassName }: Props) {
  console.log('Project Data:', data); // Debugging log

  return (
    <Link href={`/projects/${data.cname}`}>
      <Card className={cn('w-full grid group', className)}>
        <CardHeader className={cn('p-0 aspect-square relative overflow-hidden', headerClassName)}>
          <Image
            src={data.thumbnailUrl}
            alt={data.title}
            height={500}
            width={600}
            className='rounded-t-lg object-cover overflow-hidden'
            loading='lazy'
          />
          <div className='absolute opacity-0 bg-black/65 group-hover:opacity-100 flex items-center justify-center inset-0 -top-[6px] rounded-t-lg border transition-all duration-300 group-hover:backdrop-blur-sm'>
            <div className='flex items-center gap-8 group-hover:gap-2 delay-75 transition-all duration-300 font-semibold text-sm text-white/90'>
              <span>View Project</span>
              <ArrowRight className='size-4' />
            </div>
          </div>
        </CardHeader>
        <CardContent className='pt-5 grid gap-1'>
          <p className='font-semibold line-clamp-1 opacity-85'>
            {data.title}
          </p>
          <p className='text-sm font-normal line-clamp-2 text-muted-foreground'>
            {data.description}
          </p>
          <Atoms.Separator className='my-2' />
          <div className='flex items-center gap-2'>
            {data.stacks && data.stacks.length > 0 ? (
              data.stacks.map(stack => (
                stack && stack.imageUrl ? (
                  <Image
                    key={stack.label}
                    src={stack.imageUrl}
                    alt={stack.label}
                    height={22}
                    width={22}
                  />
                ) : null
              ))
            ) : (
              <p>No stacks available</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
