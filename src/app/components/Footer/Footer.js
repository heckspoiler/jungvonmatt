import React from 'react';

import arrow from '../../../../public/svg/arrow.svg';

import Image from 'next/image';

import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://ozelot.ltd/" target="_blank">
        <h2>OZELOT STUDIOS</h2>
        <Image src={arrow} alt="arrow" width={22} height={22} />
      </Link>
      <Link href="https://ozelot-ltd.bandcamp.com/" target="_blank">
        <h2>BANDCAMP</h2>
        <Image src={arrow} alt="arrow" width={22} height={22} />
      </Link>
      <a href="/workshop_downloads.zip" download>
        <h2>DOWNLOADS</h2>
        <Image src={arrow} alt="arrow" width={22} height={22} />
      </a>
      <Link href="mailto:carlo@ozelot.ltd" target="_blank">
        <h2>EMAIL</h2>
        <Image src={arrow} alt="arrow" width={22} height={22} />
      </Link>
    </footer>
  );
}
