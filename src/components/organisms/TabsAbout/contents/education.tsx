import { Atoms } from '@/components/atoms';
import { Card, CardHeader, TabsContent } from '@/components/molecules';
import { MY_EDUCATIONS } from '@/lib/consts';
import Image from 'next/image';

export function TabsContentEducation() {
  return (
    <TabsContent value='education'>
      <Card className='bg-card'>
        <CardHeader className='spce-y-4'>
          {MY_EDUCATIONS
            .sort((a, b) => b.fromYear - a.fromYear)
            .map((item, index) => (
              <Card
                key={index}
                data-aos='fade-left'
                data-aos-delay={100 * index}
                data-aos-once='true'
                data-aos-offset='-100'
              >
                <CardHeader className='flex-row items-center gap-4 space-y-0'>
                  <Image
                    src={item.logoUrl}
                    alt={item.schoolLabel}
                    height={46}
                    width={46}
                  />
                  <div className='space-y-1 w-full flex-1'>
                    <p className='font-semibold'>
                      {item.schoolFullName}
                      <span className='text-sm font-normal text-muted-foreground ml-2'>
                        [ {item.schoolLabel} ]
                      </span>
                    </p>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2 text-muted-foreground text-sm'>
                      <p className='font-medium'>{item.level}</p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p className='font-medium'>{item.major}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2 text-muted-foreground text-xs'>
                      <p className='font-medium'>
                        {item.fromYear} - {item.endYear}
                      </p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p className='font-medium'>{item.address}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-muted-foreground text-xs'>
                      <p className='font-medium'>GPA</p>
                      <Atoms.Dot variant='muted' className='size-1' />
                      <p className='font-medium'>{item.score.toFixed(2)} / {item.scoreMax.toFixed(2)}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
