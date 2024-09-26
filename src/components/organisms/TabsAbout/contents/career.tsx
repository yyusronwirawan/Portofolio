import { Atoms } from '@/components/atoms';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardHeader,
  TabsContent,
} from '@/components/molecules';
import { MY_CAREERS } from '@/lib/consts';
import { getDiffMonths } from '@/lib/utils';
import { Building } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

export function TabsContentCareer() {
  return (
    <TabsContent value='career'>
      <Card className='bg-card'>
        <CardHeader className='space-y-4'>
          {MY_CAREERS
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((item, index) => (
              <Card
                key={index}
                data-aos='fade-left'
                data-aos-delay={100 * index}
                data-aos-once='true'
                data-aos-offset='-100'
              >
                <CardHeader className='flex-row items-start gap-4 space-y-0'>
                  <div className='size-10 lg:size-12 rounded bg-white flex items-center justify-center p-1'>
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt={item.companyLabel}
                        height={46}
                        width={46}
                      />
                    ) : <Building className='text-black/80 opacity-70' />}
                  </div>
                  <div className='space-y-1 w-full flex-1'>
                    <p className='font-semibold'>{item.role}</p>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2 text-muted-foreground text-sm'>
                      <p className='font-medium'>{item.companyLabel}</p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p>[ {item.companyFullName} ]</p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p className='font-medium'>{item.address}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2 text-muted-foreground text-xs'>
                      <p className='font-medium'>
                        {format(item.fromDate, 'MMM yyyy')}
                        {' - '}
                        {item.endDate ? format(item.endDate, 'MMM yyyy') : 'Present'}
                      </p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p>{getDiffMonths(item.fromDate, item.endDate || new Date())}</p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p className='font-medium'>{item.workMode}</p>
                      <Atoms.Dot variant='muted' className='size-1 hidden lg:flex' />
                      <p className='font-medium'>{item.workType}</p>
                    </div>

                    <Accordion type='single' collapsible>
                      <AccordionItem value={item.companyLabel} className='border-none'>
                        <AccordionTrigger className='justify-start gap-2 text-sm text-muted-foreground py-2'>
                          Show responsibilities
                        </AccordionTrigger>
                        <AccordionContent className='p-0'>
                          <ul className='text-sm text-muted-foreground'>
                            {item.responsibilities.map((x, i) => (
                              <li key={i} className='list-disc list-inside'>{x}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
