import React from 'react';
import UpperContainer from './UpperContainer';
import LowerContainer from './LowerContainer';
import SquareSvg from './svgContents/SquareSvg';

export default function StartSection({
  styles,
  containerRef,
  isMobile,
  secondContainer,
}) {
  return (
    <>
      <div className={styles.TitleContainer} ref={containerRef}>
        <UpperContainer
          styles={styles}
          containerRef={containerRef}
          isMobile={isMobile}
        />
      </div>
      <SquareSvg />
      <div>
        <LowerContainer
          styles={styles}
          secondContainer={secondContainer}
          isMobile={isMobile}
        />
      </div>
    </>
  );
}
