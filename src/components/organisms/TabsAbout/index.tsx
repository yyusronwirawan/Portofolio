import { Tabs, TabsList, TabsTrigger } from '@/components/molecules';
import { BriefcaseBusiness, GraduationCap, Paperclip } from 'lucide-react';
import { TabsContentsAbout } from './contents';

export function TabsAbout() {
  return (
    <Tabs defaultValue='resume' className='w-full space-y-4'>
      <TabsList className='grid grid-cols-1 h-full lg:h-fit lg:grid-cols-3'>
        <TabsTrigger className='justify-start py-2 lg:py-1.5 lg:justify-center' value='resume'>
          <Paperclip className='size-4 mr-2' /> Resume
        </TabsTrigger>
        <TabsTrigger className='justify-start py-2 lg:py-1.5 lg:justify-center' value='career'>
          <BriefcaseBusiness className='size-4 mr-2' /> Career
        </TabsTrigger>
        <TabsTrigger className='justify-start py-2 lg:py-1.5 lg:justify-center' value='education'>
          <GraduationCap className='size-4 mr-2' /> Education
        </TabsTrigger>
      </TabsList>

      <TabsContentsAbout />
    </Tabs>
  );
}
