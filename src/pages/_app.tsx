import '../../public/styles/global.css';
import 'normalize.css';

import { AppProps } from 'next/app';

import Header from '../components/Header';

// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
