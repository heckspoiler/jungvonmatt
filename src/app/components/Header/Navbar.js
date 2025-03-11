'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

import { useStore } from 'zustand';
import intersectionStore from '../../../../stores/intersection';

export default function Navbar() {
  const listRef = useRef(null);
  const listItemsRef = useRef([]);

  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <ul ref={listRef} id="list">
          {['Hello!', 'About', 'Work', 'Contact'].map((item, index) => (
            <li key={item} ref={(el) => (listItemsRef.current[index] = el)}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
