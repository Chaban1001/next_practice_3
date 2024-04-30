'use client';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { usePathname, useRouter } from 'next/navigation';

const enum HeaderPaths {
  HOME = '/',
  ABOUT = '/about',
  CONTACTS = '/contacts',
  POSTS = '/posts',
}

export default function Header() {
  const pathname = usePathname();

  if (!pathname) return <h1>Loading...</h1>;

  return (
    <header className={styles.header}>
      <ul className={styles.headerMenu}>
        <li className={styles.menuListItem}>
          <Link
            style={{
              color: pathname === HeaderPaths.HOME ? '#222' : '#fff',
            }}
            className={styles.menuListLink}
            href={HeaderPaths.HOME}
          >
            Home
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link
            style={{
              color:
                pathname === HeaderPaths.ABOUT || pathname === '/about/about-us'
                  ? '#222'
                  : '',
            }}
            className={styles.menuListLink}
            href={HeaderPaths.ABOUT}
          >
            About
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link
            style={{
              color: pathname === HeaderPaths.CONTACTS ? '#222' : '',
            }}
            className={styles.menuListLink}
            href={HeaderPaths.CONTACTS}
          >
            Contacts
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link
            style={{
              color: pathname === HeaderPaths.POSTS ? '#222' : '',
            }}
            className={styles.menuListLink}
            href={HeaderPaths.POSTS}
          >
            Posts
          </Link>
        </li>
      </ul>
    </header>
  );
}
