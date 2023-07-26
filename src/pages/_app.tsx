import '@/styles/globals.scss';
import 'react-modern-drawer/dist/index.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/layout';
import store from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress
          height={2}
          color='white'
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
