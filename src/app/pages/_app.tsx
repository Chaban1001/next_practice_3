import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log('Router is now available:', router);
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
