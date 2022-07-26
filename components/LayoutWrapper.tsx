import headerNavLinks from '@/data/headerNavLinks';
import siteMetadata from '@/data/siteMetadata';

import Logo from '@/data/risingcore.svg';

import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';

import type { ReactNode } from 'react';
import FooterWrap from './FooterWrap';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <header className='mx-auto flex w-full max-w-5xl items-center justify-between py-10 px-4 sm:px-6 xl:px-0'>
          <div>
            <Link href='/' aria-label={siteMetadata.headerTitle}>
              <div className='flex items-center justify-between'>
                <div className='flex h-10 w-10 items-center sm:mr-3'>
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className='hidden text-2xl font-semibold sm:block'>{siteMetadata.headerTitle}</div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>

          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'>
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <FooterWrap />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
