'use client';

import React from 'react';
import styles from './WorkSection.module.css';
import SkillSection from './WorkSectionContent/SkillSection/SkillSection';
import SoftSkillSection from './WorkSectionContent/SoftSkillSection/SoftSkillSection';

export default function WorkSection({ isMobile }) {
  return (
    <section className={styles.Main}>
      <div>
        <SkillSection isMobile={isMobile} />
      </div>
      <SoftSkillSection isMobile={isMobile} />
    </section>
  );
}
