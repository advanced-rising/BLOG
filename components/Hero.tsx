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
    <div>
      <h1 className='sr-only'>Hello I'm risngcore / FrontEnd Developer from the Republic Korea.</h1>
      <div
        className='relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-222px)]'
        style={{
          transform: `translateY(-${progress * 20}vh)`,
        }}>
        <AnimatePresence>
          <div className='mt-[-120px] flex w-screen flex-col justify-between'>
            <div ref={ref} className='mx-auto md:text-4xl'>
              <div className='font-merriweather flex max-w-5xl flex-col gap-3'>
                <div className='cursor-default'>
                  <FadeUp duration={0.6}>
                    <h2 className='text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem]  lg:text-[9.375rem] lg:leading-[9.375rem]'>
                      Hello
                    </h2>
                  </FadeUp>
                  <div className='flex items-center justify-between gap-3'>
                    <FadeUp duration={0.6} delay={0.4}>
                      <h2 className='text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem]  lg:text-[9.375rem] lg:leading-[9.375rem]'>
                        I'm
                      </h2>
                    </FadeUp>
                    <FadeRight duration={0.6} delay={1.4}>
                      <div className='opacity-70'>
                        <h2 className='text-[1.625rem] leading-[1.625rem] md:text-[2.688rem] md:leading-[2.688rem] lg:text-[70px] lg:leading-[70px]'>
                          Web Development
                        </h2>
                        <h2 className='text-[1.625rem] leading-[1.625rem] md:text-[2.688rem] md:leading-[2.688rem] lg:text-[70px] lg:leading-[70px]'>
                          FrontEnd Developer
                        </h2>
                      </div>
                    </FadeRight>
                  </div>
                  <FadeUp duration={0.6} delay={0.8}>
                    <h2 className='text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem]  lg:text-[9.375rem] lg:leading-[9.375rem]'>
                      risngcore
                    </h2>
                  </FadeUp>
                </div>
                <FadeRight duration={0.6} delay={2}>
                  <Link href='/about'>
                    <a>
                      <h3 className='underline-magical font-merriweather ml-1 w-max cursor-pointer text-sm md:text-xl'>
                        Read more about me &rarr;
                      </h3>
                    </a>
                  </Link>
                </FadeRight>
              </div>
            </div>
            <div className='absolute bottom-4 left-1/2 translate-x-1/2 transform md:bottom-8'>
              <div className='flex flex-col items-center justify-center'>
                <FadeDown duration={1} delay={2.8}>
                  <HiOutlineArrowNarrowDown size={20} />
                </FadeDown>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
      <canvas className='bg-skin-base pointer-events-none absolute inset-0' id='canvas'></canvas>
    </div>
  );
}
