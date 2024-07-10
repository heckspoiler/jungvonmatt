import React, { useEffect } from 'react';
import UpperContainer from './UpperContainer';
import LowerContainer from './LowerContainer';
import SquareSvg from './svgContents/SquareSvg';
import AnotherSquareSvg from './svgContents/AnotherSquareSvg';

export default function StartSection({
  styles,
  containerRef,
  isMobile,
  secondContainer,
}) {
  useEffect(() => {
    console.log(containerRef.current, 'From startseröjlkasfd');
  }, [onload]);
  return (
    <>
      <div className={styles.TitleContainer} ref={containerRef}>
        <UpperContainer
          styles={styles}
          containerRef={containerRef}
          isMobile={isMobile}
        />
      </div>
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
