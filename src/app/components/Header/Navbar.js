'use client';

import React from 'react';
import styles from './Navbar.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  return (
    <header className={styles.Header}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
