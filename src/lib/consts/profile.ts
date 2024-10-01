import { Github, Instagram, Linkedin } from 'lucide-react';
import { Profile } from '../types';
import { STACKS } from './stack';

export const MY_PROFILE: Profile = {
  name: 'Yusron Wirawanto.',
  nickName: 'Yusron.',
  avatar: 'https://github.com/yyusronwirawan.png',
  address: 'Ponorogo, East Java, Indonesia 🇮🇩',
  status1: 'Software Engineer | IT Security',
  status2: 'Open for freelance project',
  description: 'Experienced Software Engineer with over 4 years of hands-on expertise designing and implementing innovative web & mobile applications especially in frontend side. Strong problem-solving skills and a commitment to staying current with emerging trends in web development.',
  socials: [
    { label: 'Linkedin', href: 'https://linkedin.com/in/yyusronwirawan', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/yyusronwirawan', icon: Github },
    { label: 'Instagram', href: 'https://instagram.com/yyusronwirawan', icon: Instagram },
  ],
  skills: STACKS,
};
