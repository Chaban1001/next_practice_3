import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import Link from 'next/link';

const enum AboutPath {
  ABOUT__US = '/about/about-us',
}

export const metadata: Metadata = {
  title: 'About | About page',
};

export default function About() {
  return (
    <div className={styles.textCenter}>
      About Page
      <hr />
      <br />
      <Link href={AboutPath.ABOUT__US}>About-Us</Link>{' '}
    </div>
  );
}
