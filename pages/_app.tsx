import '@fontsource/inter/variable-full.css';
import 'katex/dist/katex.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { ClientReload } from '@/components/ClientReload';
import LayoutWrapper from '@/components/LayoutWrapper';
import Analytics from '@/components/analytics';
import '@/css/prism.css';
import '@/css/tailwind.css';
import siteMetadata from '@/data/siteMetadata';

import type { AppProps } from 'next/app';
import { ScrollObserver } from '@/components/ScrollObserver';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import LogRocket from '@/components/Logrocket';
import ProgressBar from '@/components/ProgressBar';
import { AnimatePresence } from 'framer-motion';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <AnimatePresence exitBeforeEnter initial={false}>
        <ScrollObserver>
          <ProgressBar />
          <ScrollProgressBar />
          <LogRocket />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ScrollObserver>
      </AnimatePresence>
    </ThemeProvider>
  );
}
