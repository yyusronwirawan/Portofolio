'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/molecules';
import { Project } from '@/lib/types';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

type Props = {
  data: Project;
};

export function CarouselPortfolio({ data }: Props) {
  return (
    <Carousel
      plugins={[Autoplay({ stopOnMouseEnter: true, delay: 3000 })]}
      className='w-full'
    >
      <CarouselContent>
        {data.imageUrls.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item}
              alt={`${data.title}-image-${index}`}
              height={600}
              width={600}
              className='lg:hover:scale-110 rounded-lg lg:rounded-xl transition-all duration-500'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-1 disabled:hidden' />
      <CarouselNext className='right-1 disabled:hidden' />
    </Carousel>
  );
}
