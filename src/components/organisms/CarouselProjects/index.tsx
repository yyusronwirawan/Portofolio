'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/molecules';
import { CardProject } from '@/components/organisms';
import { MY_PROJECTS } from '@/lib/consts';

export function CarouselProjects() {
  return (
    <Carousel>
      <CarouselContent>
        {MY_PROJECTS
          .filter(x => x.isFeatured)
          .map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-auto'
              data-aos='fade-left'
              data-aos-delay={index * 100}
            >
              <CardProject data={item} className='max-w-64' />
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className='hidden lg:flex'>
        <CarouselPrevious className='disabled:hidden left-1' />
        <CarouselNext className='disabled:hidden right-1' />
      </div>
    </Carousel>
  );
}
