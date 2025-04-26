import React, { useEffect } from 'react';

export const useClickAway = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const handleClickAway = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickAway);
    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, []);
};
