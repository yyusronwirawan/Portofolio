import { Suspense } from 'react';
import { AsyncStats } from './AsyncStats';
import { CalendarClock } from 'lucide-react';
import { SkeletonStats } from './SkeletonStats';

export function WeeklyStats() {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='flex items-center gap-2 text-lg font-semibold opacity-85'>
        <CalendarClock /> Weekly Statistics
      </h3>
      <Suspense fallback={<SkeletonStats />}>
        <AsyncStats />
      </Suspense>
    </section>
  );
}
