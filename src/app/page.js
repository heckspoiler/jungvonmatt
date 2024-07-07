import Image from 'next/image';
import styles from './page.module.css';
import Scene from './components/three/Scene';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hey Jung Von Matt</h1>
      <Scene />
    </main>
  );
}
