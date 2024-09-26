import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AOSProvider, ThemeProvider } from '@/providers';
import { Aside, Header } from '@/components/organisms';
import { Atoms } from '@/components/atoms';
import { Toaster } from '@/components/molecules';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Yusron Wirawanto - Personal Website',
  description: 'No description. Just my personal website.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={jakarta.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <NextTopLoader showSpinner={false} />
          <Header showGradient />
          <Atoms.Container className='flex gap-10 lg:mt-6'>
            <Aside />
            <AOSProvider>{children}</AOSProvider>
          </Atoms.Container>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
