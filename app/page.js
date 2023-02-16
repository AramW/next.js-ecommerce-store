import Image from 'next/image';
import Button from './Button';
import Card from './Card.js';
import styles from './page.module.scss';

// import neon-button from './neon-button' //;

export default function Homepage() {
  return (
    <main>
      <h1>
        <Image
          className={styles.image}
          src="/Eagles Logo.png"
          alt=""
          width="200"
          height="200"
        />
        Welcome to your 2023 Nfc Champions merch store:
        <Image
          className={styles.image}
          src="/Eagles_Helmet.png"
          alt=""
          width="200"
          height="200"
        />
      </h1>
      <h2> </h2>
      <br />

      <Image
        className={styles.image1}
        src="/Eagles_Merch_Home1.png"
        alt="Eagles_Merch_Home"
        width="1362"
        height="675"
      />
      <h3>
        <button>Lets Go!</button>
      </h3>

      <Image
        className={styles.image2}
        src="/Hurts.png"
        alt="Hurst"
        width="1366"
        height="478"
      />
      <h4>
        <button>Lets Go!</button>
      </h4>
    </main>
  );
}
