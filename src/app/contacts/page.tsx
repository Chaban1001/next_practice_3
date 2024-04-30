import { Metadata } from 'next';
import styles from '@/app/page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacts | Contacts page',
};

export default function Contacts() {
  return (
    <div className={styles.textCenter}>
      Contacts page{' '}
      <div>
        <strong>
          <Link style={{ color: '#222' }} href='/contacts/team'>
            Move for Team!
          </Link>
        </strong>
      </div>
    </div>
  );
}
