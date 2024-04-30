import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About-Us',
  icons: '/public/next.svg',
};

export default function AboutUs() {
  return <h1>Hello AboutUs from About Page</h1>;
}
