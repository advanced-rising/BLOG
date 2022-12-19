import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import FadeDown from './Animations/FadeDown';
import FadeRight from './Animations/FadeRight';
import FadeUp from './Animations/FadeUp';
import { renderCanvas } from './renderCanvas';

import { ScrollContext } from './ScrollObserver';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className='h-screen'>
      <div className='flex w-full flex-col items-center justify-start gap-40px px-10 xl:flex-row'>
        <h1 className='sr-only'>Hello I'm risngcore / FrontEnd Developer from the Republic Korea.</h1>
        <div className='h-450px w-450px rounded-20px bg-[url("/static/images/risingcore.png")] bg-cover bg-center bg-no-repeat'></div>
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
                      <h2 className='text-[100px] leading-[100px] md:text-[100px] md:leading-[100px]  lg:text-[100px] lg:leading-[100px]'>
                        Hello
                      </h2>
                    </FadeUp>
                    <div className='flex items-center justify-between gap-3'>
                      <FadeUp duration={0.6} delay={0.4}>
                        <h2 className='text-[100px] leading-[100px] md:text-[100px] md:leading-[100px]  lg:text-[100px] lg:leading-[100px]'>
                          I'm
                        </h2>
                      </FadeUp>
                      <FadeRight duration={0.6} delay={1.4}>
                        <div className='opacity-70'>
                          <h2 className='whitespace-nowrap text-[40px] leading-[40px] md:text-[40px] md:leading-[40px] lg:text-[40px] lg:leading-[40px]'>
                            Interactive Web
                          </h2>
                          <h2 className='whitespace-nowrap text-[40px] leading-[40px] md:text-[40px] md:leading-[40px] lg:text-[40px] lg:leading-[40px]'>
                            FrontEnd Developer
                          </h2>
                        </div>
                      </FadeRight>
                    </div>
                    <FadeUp duration={0.6} delay={0.8}>
                      <h2 className='text-[100px] leading-[100px] md:text-[100px] md:leading-[100px]  lg:text-[100px] lg:leading-[100px]'>
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
      <FadeRight duration={0.6} delay={2}>
        <Link href='/about'>
          <a className='mt-40px flex w-full justify-end px-20px xl:-mt-20px'>
            <h3 className='underline-magical font-merriweather w-max cursor-pointer text-end text-16px'>
              Read more about me &rarr;
            </h3>
          </a>
        </Link>
      </FadeRight>
      <div className='absolute bottom-4 left-1/2 translate-x-1/2 transform md:bottom-8'>
        <div className='flex flex-col items-center justify-center'>
          <FadeDown duration={1} delay={2.8}>
            <HiOutlineArrowNarrowDown size={20} />
          </FadeDown>
        </div>
      </div>
      <canvas className='bg-skin-base pointer-events-none absolute inset-0' id='canvas'></canvas>
    </div>
  );
}
