import { Atoms } from '@/components/atoms';
import { Card, CardHeader, TabsContent } from '@/components/molecules';
import { Download, FileBadgeIcon } from 'lucide-react';
import Link from 'next/link';

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || '#';
const certificatesUrl = process.env.NEXT_PUBLIC_CERTIFICATES_URL || '#';

function ExternalButtons() {
  return (
    <div className='grid gap-3 lg:grid-cols-2'>
      <Atoms.Button data-aos='fade-right' variant='outline' asChild>
        <Link href={`${resumeUrl}/view`} target='_blank'>
          <Download className='size-4 mr-2' /> Download my resume
        </Link>
      </Atoms.Button>
      <Atoms.Button data-aos='fade-left' variant='outline' asChild>
        <Link href={certificatesUrl} target='_blank'>
          <FileBadgeIcon className='size-4 mr-2' /> View my certificates
        </Link>
      </Atoms.Button>
    </div>
  );
}

export function TabsContentResume() {
  return (
    <TabsContent value='resume'>
      <Card className='bg-card'>
        <CardHeader className='hidden lg:block space-y-4'>
          <ExternalButtons />
          <iframe loading='lazy' src={`${resumeUrl}/preview`} className='w-full h-dvh' />
        </CardHeader>

        <CardHeader className='lg:hidden'>
          <ExternalButtons />
        </CardHeader>
      </Card>
    </TabsContent>
  );
}
