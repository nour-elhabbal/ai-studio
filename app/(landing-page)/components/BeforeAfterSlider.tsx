'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Physical X from the left side of the container
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // We enforce LTR on the slider container so the physical dragging always aligns with the visual left/right splits
  return (
    <div
      ref={containerRef}
      dir="ltr"
      className="relative h-48 w-full cursor-ew-resize overflow-hidden rounded-2xl border border-border select-none md:h-64"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After Layer (Base layer) - Plain Blue Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 p-6 text-center text-white">
        <span className="absolute top-4 right-4 z-0 rounded-full bg-white/20 px-2 py-1 text-xs font-semibold text-white">
          {afterLabel}
        </span>
        <div className="relative z-0 w-full px-4 text-lg font-medium break-words md:text-xl">
          {afterContent}
        </div>
      </div>

      {/* Before Layer (Top layer with clip-path) - Plain Red Background */}
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

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex w-1 items-center justify-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full border bg-white text-gray-800 shadow">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
