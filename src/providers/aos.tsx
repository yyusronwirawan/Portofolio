'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { PropsWithChildren, useEffect } from 'react';

export function AOSProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out-cubic' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <>{children}</>;
}
