import './global.scss';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import RootHead from './head';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CookieBanner />
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/team">Team</Link>
              <Link href="/other">Other</Link>
              <Link href="/help">Help</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          copyright Eagles4everyone 2023
        </footer>
      </body>
    </html>
  );
}
