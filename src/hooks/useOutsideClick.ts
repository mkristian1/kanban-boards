import { useEffect } from 'react';

const useOutsideClick = (
  active: boolean,
  handle: (status: boolean) => void,
  ref: { current: HTMLDivElement | null }
) => {
  useEffect(() => {
    const listenOutsideClick = (e: any) => {
      if (ref && active && ref.current && !ref.current.contains(e.target)) {
        handle(false);
      }
    };

    document.body.addEventListener('mousedown', listenOutsideClick);

    return () => {
      document.body.removeEventListener('mousedown', listenOutsideClick);
    };
  }, [active, handle, ref]);
};

export { useOutsideClick };
