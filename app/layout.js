import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/teams">Team</Link>
              <Link href="/afc">Afc</Link>
              <Link href="/nfc">Nfc</Link>
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
