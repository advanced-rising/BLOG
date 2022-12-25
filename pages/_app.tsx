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
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function GoogleAnalytics() {
  const {
    analytics: { googleAnalyticsId },
  } = siteMetadata;
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const {
    analytics: { googleAnalyticsId },
  } = siteMetadata;

  const pageview = (url) => {
    window.gtag('config', googleAnalyticsId, {
      page_path: url,
    });
  };

  const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
            <GoogleAnalytics />
            <Component {...pageProps} />
          </LayoutWrapper>
        </ScrollObserver>
      </AnimatePresence>
    </ThemeProvider>
  );
}
