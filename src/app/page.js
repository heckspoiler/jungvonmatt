import React from 'react';
import styles from './page.module.css';

import Footer from './components/Footer/Footer';

// components import
import Scene from './components/three/Scene';
import Content from './components/content/Content';

export default function Home() {
  return (
    <main className={styles.main}>
      <Content />
      <Scene />
    </main>
  );
}
