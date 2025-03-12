import React from 'react';

import logo from '../../../../public/svg/ozelot_pink.svg';

import Image from 'next/image';

import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://ozelot.ltd/" target="_blank">
        <Image src={logo} alt="Ozelot" />
      </Link>
      <Link href="mailto:carlo@ozelot.ltd" target="_blank">
        <h2>DOWNLOADS</h2>
      </Link>
      <Link href="mailto:carlo@ozelot.ltd" target="_blank">
        <h2>EMAIL</h2>
      </Link>
    </footer>
  );
}
