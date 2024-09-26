import { Atoms } from '@/components/atoms';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/molecules';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function CardContact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-4 opacity-85 text-xl'>
          <Rocket /> Lets work together!
        </CardTitle>
      </CardHeader>
      <CardContent>
        I&apos;m open for freelance projects, feel free to email me to see how can we collaborate.
      </CardContent>
      <CardFooter>
        <Atoms.Button variant='secondary' asChild>
          <Link href='/contact'>Contact me</Link>
        </Atoms.Button>
      </CardFooter>
    </Card>
  );
}
