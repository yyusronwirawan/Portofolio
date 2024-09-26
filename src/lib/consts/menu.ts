import {
  Coffee,
  Contact,
  Home,
  MessageCircleMore,
  PieChartIcon,
  User,
} from 'lucide-react';
import { NavMenu } from '../types';

export const NAV_MENUS: NavMenu[] = [
  {
    sort: 1,
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    sort: 2,
    label: 'Dashboard',
    icon: PieChartIcon,
    href: '/dashboard',
  },
  {
    sort: 3,
    label: 'Projects',
    icon: Coffee,
    href: '/projects',
  },
  {
    sort: 4,
    label: 'Contact',
    icon: Contact,
    href: '/contact',
  },
  {
    sort: 5,
    label: 'About',
    icon: User,
    href: '/about',
  },
  {
    sort: 6,
    label: 'Guestroom',
    icon: MessageCircleMore,
    href: '/guestroom',
  },
];
