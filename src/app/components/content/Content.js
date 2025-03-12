'use client';
import React, { useRef, useEffect } from 'react';
import styles from './Content.module.css';

import { isMobileStore } from '../../../../stores/isMobileStore';

import { pfiveContent } from './pfive'; // Make sure this path matches where your file is

import LinkComponent from './LinkComponent';

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  // refs
  const containerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, setIsMobile]);

  return (
    <div className={styles.Main}>
      {isMobile ? (
        <section className={styles.Mobile}>
          <h1>Only on wider screens available!</h1>
        </section>
      ) : (
        <section ref={containerRef} id="container">
          <div className={styles.content}>
            <div className={styles.pfiveContent}>
              <div className={styles.documentation}>
                <div className={styles.title}>
                  <h2>DOCS</h2>
                </div>
                <div className={styles.linkContainer}>
                  {pfiveContent.documentations.map((doc, index) => (
                    <div key={index} className={styles.link}>
                      <LinkComponent name={doc.name} url={doc.url} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Templates Section */}
              <div className={styles.editors}>
                <div className={styles.title}>
                  <h2>CODE</h2>
                </div>
                <div className={styles.linkContainer}>
                  {pfiveContent.templates.map((doc, index) => (
                    <div key={index} className={styles.link}>
                      <LinkComponent name={doc.name} url={doc.url} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Tutorials Section */}

              <div className={styles.editors}>
                <div className={styles.title}>
                  <h2>TUTORIALS </h2>
                </div>
                <div className={styles.linkContainer}>
                  {pfiveContent.tutorials.map((doc, index) => (
                    <div key={index} className={styles.link}>
                      <LinkComponent name={doc.name} url={doc.url} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
