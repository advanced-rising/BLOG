import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return <div className='mx-auto'>{children}</div>;
}
