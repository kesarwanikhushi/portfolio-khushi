import { useEffect, useRef } from 'react';

/**
 * ModernCursor - Minimal custom cursor
 * 
 * FIXED ISSUES:
 * 1. Position bug: Separated positioning logic from hover animations
 * 2. Shape: Pure triangular pointer head (no stem/tail)
 * 3. Effects: Zero glow, blur, or smoothing
 * 
 * Technical approach:
 * - mousemove captures clientX/clientY
 * - Position applied via translate3d (GPU accelerated)
 * - No CSS transitions on transform
 * - will-change: transform for performance
 * - Offset aligned so triangle tip = mouse position
 */
const ModernCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Position tracking
    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;

    // Update cursor position (runs every frame)
    const updatePosition = () => {
      // Offset by 4px to align triangle tip with mouse
      cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      rafId = requestAnimationFrame(updatePosition);
    };

    // Capture mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Start tracking
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Don't render on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pure triangular pointer head (3 points only) */}
        <path
          d="M2 2L14 8L2 14Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ModernCursor;
