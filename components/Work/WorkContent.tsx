import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { WorkContainer } from './WorkContainer';
import { WorkLeft } from './WorkLeft';
import { WorkRight } from './WorkRight';
import { WorkTile } from './workTiles';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress }: WorkContentProps) {
  const { title, description, image, projects } = work;
  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div>{description}</div>
        <span className='text-4xl font-semibold tracking-tight md:text-5xl'>{title}</span>
        <div className='flex cursor-pointer items-center justify-end gap-10px'>
          <p className='text-12px'>Read more {projects} </p>
          <HiOutlineArrowNarrowRight size={18} />
        </div>
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className='h-full bg-black drop-shadow-2xl'>
          <Image src={image.src} alt={title} layout='fill' objectFit='cover' />
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
