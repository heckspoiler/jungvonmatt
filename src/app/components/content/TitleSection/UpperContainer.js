import React from 'react';
import TitleSection from './UpperContainerContent/TitleSection';
import RightTitleSection from './UpperContainerContent/RightTitleSection';

export default function UpperContainer({ styles, containerRef, isMobile }) {
  return (
    <>
      <TitleSection
        styles={styles}
        containerRef={containerRef}
        isMobile={isMobile}
      />
      <RightTitleSection
        styles={styles}
        containerRef={containerRef}
        isMobile={isMobile}
      />
    </>
  );
}
