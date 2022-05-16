import React, { useEffect } from 'react';

export default function useOnClickOutside(ref: React.RefObject<any>, handler: (e: Event) => void) {
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target)) { return; }
      handler(e);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);
}