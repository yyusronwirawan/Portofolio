import { Atoms } from '@/components/atoms';

export function SkeletonStats() {
  return (
    <>
      <Atoms.Skeleton className='h-4 w-64' />
      <div className='grid md:grid-cols-2 gap-3'>
        <Atoms.Skeleton className='h-[84px]' />
        <Atoms.Skeleton className='h-[84px]' />
        <Atoms.Skeleton className='h-[84px]' />
        <Atoms.Skeleton className='h-[84px]' />
        <Atoms.Skeleton className='h-[84px]' />
        <Atoms.Skeleton className='h-[84px]' />
      </div>
    </>
  );
}
