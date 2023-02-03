import Image from 'next/image';
import Button from './Button';
import styles from './page.module.scss';

// import neon-button from './neon-button' //;

export default function Homepage() {
  return (
    <main>
      <h1>A.J.</h1>
      <Image
        className={styles.image}
        src="/jersey11.webp"
        alt="A.J."
        width="150"
        height="150"
      />
      <button className="neon-button">Lets Go!</button>
      <h2>Westbrook</h2>
      <Image
        className={styles.image}
        src="/Westbrook20.webp"
        alt="Westbrook"
        width="150"
        height="150"
      />
      <button className="neon-button">Lets Go!</button>
      <h3>Dawkins</h3>
      <img className={styles.image} src="/Dawkins20.webp" alt="Dawkins" />
      <button className="neon-button">Lets Go!</button>
    </main>
  );
}
