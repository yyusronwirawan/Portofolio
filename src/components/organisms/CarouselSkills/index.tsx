'use client';

import { Carousel, CarouselContent, CarouselItem, ChipStack } from '@/components/molecules';
import { MY_PROFILE } from '@/lib/consts';
import { sliceToThreeArrays } from '@/lib/utils';
import Autoscroll from 'embla-carousel-auto-scroll';

const slicedSkills = sliceToThreeArrays(MY_PROFILE.skills);

export function CarouselSkills() {
  return (
    <div className='space-y-4 relative'>
      <div className='bg-gradient-to-r from-background to-30% absolute inset-0 z-30' />
      <div className='bg-gradient-to-l from-background to-30% absolute inset-0 z-20 -top-4' />

      {slicedSkills.map((skills, index) => (
        <Carousel
          key={index}
          opts={{ loop: true }}
          plugins={[
            Autoscroll({
              speed: 0.5,
              direction: (index + 1) % 2 === 0 ? 'backward' : 'forward',
            })
          ]}
        >
          <CarouselContent>
            {skills.map(item => (
              <CarouselItem key={item.label} className='basis-auto'>
                <ChipStack data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ))}
    </div>
  );
}
