import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { ThemeProvider } from '@/components/ui/theme-provider';
import Layout from '@/components/layout/Layout';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
