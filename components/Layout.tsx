import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Rocket Kurly' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <Image
        src="/logo.png"
        alt="logo"
        className={styles.logo}
        width={100}
        height={100}
      />
      <nav className={styles.nav}>
        <Link href="/market">
          <a className={styles.link}>Market</a>
        </Link>
        <Link href="/sign-up">
          <a className={styles.link}>Sign Up</a>
        </Link>
        <Link href="/login">
          <a className={styles.link}>Login</a>
        </Link>
        {/* | <a href="/api/users">Users API</a> */}
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
