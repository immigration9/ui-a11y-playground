import { useState, useRef, useEffect } from 'react';

const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const node = ref.current;
    if (node) {
      const nodeElement = node as HTMLElement;
      nodeElement.addEventListener('mouseover', handleMouseOver);
      nodeElement.addEventListener('mouseout', handleMouseOut);

      return () => {
        nodeElement.removeEventListener('mouseover', handleMouseOver);
        nodeElement.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return { hoverRef: ref, isHovered: value };
};

export default useHover;
