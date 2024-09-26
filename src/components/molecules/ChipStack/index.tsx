import { Atoms } from '@/components/atoms';
import { PropsWithCn, Stack } from '@/lib/types';
import Image from 'next/image';

type Props = PropsWithCn<{ data: Stack; }>;

export function ChipStack({ data, className }: Props) {
  return (
    <Atoms.Chip className={className}>
      <Image
        src={data.imageUrl}
        height={18}
        width={18}
        alt={data.label}
        loading='lazy'
      />
      {data.label}
    </Atoms.Chip>
  );
}
