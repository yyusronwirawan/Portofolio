import { AvailableStack, Stack } from '../types';

export const STACKS: Stack[] = [
  { label: 'Laravel', imageUrl: '/svgs/laravel.svg' },
  { label: 'CodeIgniter', imageUrl: '/svgs/codeigniter.svg' },
  { label: 'Arduino', imageUrl: '/svgs/arduino.svg' },
  { label: 'C', imageUrl: '/svgs/c.svg' },
  { label: 'C++', imageUrl: '/svgs/cplus.svg' },
  { label: 'C#', imageUrl: '/svgs/csharp.svg' },
  { label: 'Node.js', imageUrl: '/svgs/nodejs.svg' },
  { label: 'React.js', imageUrl: '/svgs/reactjs.svg' },
  { label: 'Next.js', imageUrl: '/svgs/nextjs.svg' },
  { label: 'HTML5', imageUrl: '/svgs/html5.svg' },
  { label: 'CSS3', imageUrl: '/svgs/css3.svg' },
  { label: 'Bootstrap', imageUrl: '/svgs/bootstrap.svg' },
  { label: 'TailwindCSS', imageUrl: '/svgs/tailwind.svg' },
  { label: 'React Native', imageUrl: '/svgs/reactjs.svg' },
  { label: 'Vite', imageUrl: '/svgs/vite.svg' },
  { label: 'Redux', imageUrl: '/svgs/redux.svg' },
  { label: 'Zustand', imageUrl: '/svgs/zustand.svg' },
  { label: 'Axios', imageUrl: '/svgs/axios.svg' },
  { label: 'React Hook Form', imageUrl: '/svgs/react-hook-form.svg' },
  { label: 'Zod', imageUrl: '/svgs/zod.svg' },
  { label: 'Chakra UI', imageUrl: '/svgs/chakra.svg' },
  { label: 'Daisy UI', imageUrl: '/svgs/daisy.svg' },
  { label: 'Material UI', imageUrl: '/svgs/material.svg' },
  { label: 'Shadcn UI', imageUrl: '/svgs/shadcn.svg' },
  { label: 'JavaScript', imageUrl: '/svgs/js.svg' },
  { label: 'TypeScript', imageUrl: '/svgs/ts.svg' },
  { label: 'Express.js', imageUrl: '/svgs/express.svg' },
  { label: 'Prisma', imageUrl: '/svgs/prisma.svg' },
  { label: 'MySQL', imageUrl: '/svgs/mysql.svg' },
  { label: 'PostgreSQL', imageUrl: '/svgs/postgresql.svg' },
  { label: 'Firebase', imageUrl: '/svgs/firebase.svg' },
  { label: 'MQTT', imageUrl: '/svgs/mqtt.svg' },
  { label: 'Python', imageUrl: '/svgs/python.svg' },
  { label: 'Postman', imageUrl: '/svgs/postman.svg' },
];

export const getStack = (key: AvailableStack): Stack | undefined => {
  return STACKS.find(x => x.label === key);
};
