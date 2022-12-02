import { useState, useEffect } from 'react';

export const responsiveMap = {
  '320': 'xxs',
  '479': 'xxs_max',
  '480': 'xs',
  '767': 'xs_max',
  '768': 'sm',
  '991': 'sm_max',
  '992': 'md',
  '1199': 'md_max',
  '1200': 'lg',
};

export const responsiveMapSizes = {
  xxs: 320,
  xxs_max: 479,
  xs: 480,
  xs_max: 767,
  sm: 768,
  sm_max: 991,
  md: 992,
  md_max: 1199,
  lg: 1200,
};


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window != 'undefined' ? window.innerWidth : 0,
    height: typeof window != 'undefined' ? window.innerHeight : 0,
    size: 0,
  });

  const toCssSize = width => {
    const size = Object.keys(responsiveMap)
        .filter(n => width <= n && responsiveMap[n])
        .map(n => responsiveMap[n])[0];

    return size;
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        size: toCssSize(window.innerWidth),
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize
