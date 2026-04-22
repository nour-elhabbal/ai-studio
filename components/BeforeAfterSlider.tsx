'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  MouseEvent,
  TouchEvent,
  KeyboardEvent,
} from 'react';
import { GripVertical } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  beforeLabel: string;
  afterLabel: string;
}

export function BeforeAfterSlider({
  beforeContent,
  afterContent,
  beforeLabel,
  afterLabel,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false); // useRef instead of useState — avoids re-renders on drag state change
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null); // for RAF throttling

  // Stable handleMove — defined once, never recreated
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    // Cancel any pending RAF before scheduling a new one
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    });
  }, []); // empty deps — containerRef and rafRef are refs, always stable

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      isDragging.current = true;
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const onTouchStart = useCallback(
    (e: TouchEvent) => {
      isDragging.current = true;
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  // Keyboard accessibility — arrow keys move the slider
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(0, p - 1));
    if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(100, p + 1));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault(); // prevent scroll-while-dragging
      handleMove(e.touches[0].clientX);
    };

    const handleUp = () => {
      isDragging.current = false;
    };

    // Registered once — no longer torn down/re-added on every drag toggle
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
      // Clean up any pending RAF on unmount
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMove]); // handleMove is stable (useCallback + empty deps), so this runs once

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className="relative h-48 w-full cursor-ew-resize overflow-hidden rounded-2xl border border-border select-none md:h-64"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After Layer (Base layer) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 p-6 text-center text-white">
        <span className="absolute top-4 right-4 z-0 rounded-full bg-white/20 px-2 py-1 text-xs font-semibold text-white">
          {afterLabel}
        </span>
        <div className="relative z-0 w-full px-4 text-lg font-medium break-words md:text-xl">
          {afterContent}
        </div>
      </div>

      {/* Before Layer (clipped) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-red-600 p-6 text-center text-white"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <span className="absolute top-4 left-4 rounded-full bg-white/20 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white">
          {beforeLabel}
        </span>
        <div className="relative z-0 w-full px-4 text-lg font-medium break-words md:text-xl">
          {beforeContent}
        </div>
      </div>

      {/* Slider Handle — keyboard accessible */}
      <div
        role="slider"
        aria-label="Before/after comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 z-10 flex w-1 items-center justify-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full border bg-white text-gray-800 shadow">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
