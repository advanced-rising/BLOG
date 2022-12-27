import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import FadeDown from './Animations/FadeDown';
import FadeRight from './Animations/FadeRight';
import FadeUp from './Animations/FadeUp';

import { ScrollContext } from './ScrollObserver';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div className='h-screen'>
      <div className='flex w-full flex-col items-center justify-center gap-10px px-0 md:gap-40px lg:px-10 xl:flex-row'>
        <h1 className='sr-only'>Hello I'm risngcore / FrontEnd Developer from the Republic Korea.</h1>
        <Link href={'/about'} passHref>
          <a>
            <h3 className='underline-magical font-merriweather hidden w-max cursor-pointer text-end text-16px'>
              Read more about me &rarr;
            </h3>
            <div
              className='max-w-640px max-h-640px aspect-square h-full w-full rounded-20px bg-[url("/static/images/risingcore.png")]
        bg-cover bg-center bg-no-repeat sm:aspect-auto sm:h-450px sm:w-450px'></div>{' '}
          </a>
        </Link>
        <div
          className='relative z-10 items-center'
          style={{
            transform: `translateY(${progress * 5}vh)`,
          }}>
          <AnimatePresence>
            <div className='flex flex-col justify-between'>
              <div ref={ref} className='mx-auto'>
                <div className='font-merriweather flex max-w-5xl flex-col'>
                  <div className=' flex cursor-default flex-col'>
                    <FadeUp duration={0.6}>
                      <h2 className='leading-52px text-52px font-bold sm:text-[100px] sm:leading-[100px]  lg:text-[100px] lg:leading-[100px]'>
                        Hello
                      </h2>
                    </FadeUp>
                    <div className='flex items-center justify-between gap-3'>
                      <FadeUp duration={0.6} delay={0.4}>
                        <h2 className='leading-52px text-52px  font-bold sm:text-[100px] sm:leading-[100px]  lg:text-[100px] lg:leading-[100px]'>
                          I'm
                        </h2>
                      </FadeUp>
                      <FadeRight duration={0.6} delay={1.4}>
                        <div className='opacity-70'>
                          <h2 className='leading-22px whitespace-nowrap text-22px font-bold sm:text-[40px] sm:leading-[40px] lg:text-[40px] lg:leading-[40px]'>
                            Interactive Web
                          </h2>
                          <h2 className='leading-22px whitespace-nowrap text-22px font-bold sm:text-[40px] sm:leading-[40px] lg:text-[40px] lg:leading-[40px]'>
                            FrontEnd Developer
                          </h2>
                        </div>
                      </FadeRight>
                    </div>
                    <FadeUp duration={0.6} delay={0.8}>
                      <h2 className='leading-52px text-52px font-bold sm:text-[100px] sm:leading-[100px]  lg:text-[100px] lg:leading-[100px]'>
                        rising core
                      </h2>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>

      <div className='absolute bottom-4 left-1/2 translate-x-1/2 transform sm:bottom-8'>
        <div className='flex flex-col items-center justify-center'>
          <FadeDown duration={1} delay={2.8}>
            <HiOutlineArrowNarrowDown size={20} />
          </FadeDown>
        </div>
      </div>
    </div>
  );
}
