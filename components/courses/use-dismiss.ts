'use client';

import { type RefObject, useEffect } from 'react';

const useDismiss = (ref: RefObject<HTMLElement | null>, open: boolean, onClose: () => void) => {
  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onClose();
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [ref, open, onClose]);
};

export default useDismiss;
