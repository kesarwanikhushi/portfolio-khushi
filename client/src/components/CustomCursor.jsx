import { useEffect, useRef } from 'react';

/**
 * Professional Dual-Tail Cursor Component
 * 
 * SVG Path Breakdown:
 * -------------------
 * Point 1 (2, 2)   → Sharp front tip (aligned with mouse)
 * Point 2 (2, 14)  → Left edge, extends downward
 * Point 3 (6, 13)  → Upper tail endpoint
 * Point 4 (5, 15)  → Center notch (concave indent)
 * Point 5 (8, 13)  → Lower tail endpoint
 * Point 6 (8, 8)   → Right edge connection
 * Point 7 (2, 2)   → Close path back to tip
 * 
 * This creates a professional design-tool cursor with:
 * - Sharp triangular front tip
 * - Dual tails at rear with visible separation
 * - Concave center notch between tails
 * - Total: 6 distinct points forming a custom polygon
 */

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Detect touch devices and disable custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    let animationFrameId = null;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Cancel previous frame if it exists
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Use requestAnimationFrame for instant response
      animationFrameId = requestAnimationFrame(() => {
        // Offset to align the sharp tip (2, 2) with mouse pointer
        cursor.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
      });
    };

    // Single event listener with passive flag for performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-dual-tail-cursor"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 10000,
        willChange: 'transform',
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Dual-tail cursor with concave notch */}
        <path
          d="M 2 2 L 2 14 L 6 13 L 5 15 L 8 13 L 8 8 Z"
          fill="none"
          stroke="var(--cursor-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
