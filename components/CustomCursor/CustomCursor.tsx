'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './CustomCursor.module.css';

/* ── Cursor Context ── */

type CursorMode = 'default' | 'view' | 'open' | 'hidden';

interface CursorContextValue {
  setCursorMode: (mode: CursorMode) => void;
}

const CursorContext = createContext<CursorContextValue>({
  setCursorMode: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}

/* ── Cursor Labels ── */

const CURSOR_LABELS: Record<CursorMode, string> = {
  default: '',
  view: 'VIEW ↗',
  open: 'OPEN ↗',
  hidden: '',
};

/* ── Provider ── */

interface CustomCursorProviderProps {
  children: ReactNode;
}

export function CustomCursorProvider({ children }: CustomCursorProviderProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>('default');
  const [isTouch, setIsTouch] = useState(false);
  const positionRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const setCursorMode = useCallback((newMode: CursorMode) => {
    setMode(newMode);
  }, []);

  useEffect(() => {
    // Detect touch device
    const hasTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(hasTouch);

    if (hasTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
        }
      });
    };

    const onMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const onMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const label = CURSOR_LABELS[mode];
  const hasLabel = mode === 'view' || mode === 'open';

  return (
    <CursorContext.Provider value={{ setCursorMode }}>
      {children}
      {!isTouch && (
        <div
          ref={cursorRef}
          className={`${styles.cursor} ${hasLabel ? styles.hasLabel : ''} ${mode === 'hidden' ? styles.hidden : ''}`}
          aria-hidden="true"
        >
          <div className={styles.dot}>
            {hasLabel && <span className={styles.label}>{label}</span>}
          </div>
        </div>
      )}
    </CursorContext.Provider>
  );
}
