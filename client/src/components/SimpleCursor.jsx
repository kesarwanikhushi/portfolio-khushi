import { useEffect, useRef } from 'react';

const SimpleCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        width: '32px',
        height: '36px',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Custom arrow cursor matching design with theme colors */}
      <svg
        width="32"
        height="36"
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.6)) drop-shadow(0 0 15px rgba(191, 64, 255, 0.4))',
        }}
      >
        {/* Outer dark/black outline triangle */}
        <path
          d="M 6 2 L 6 34 L 26 18 Z"
          fill="none"
          stroke="#0f172a"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        
        {/* Top purple section */}
        <path
          d="M 8 6 L 8 16 L 20 10 Z"
          fill="#bf40ff"
          strokeLinejoin="round"
        />
        
        {/* Middle cyan section */}
        <path
          d="M 8 14 L 8 22 L 20 18 Z"
          fill="#00f0ff"
          strokeLinejoin="round"
        />
        
        {/* Bottom purple section */}
        <path
          d="M 8 20 L 8 30 L 20 26 Z"
          fill="#bf40ff"
          strokeLinejoin="round"
        />
        
        {/* White dividing line - top */}
        <line
          x1="8"
          y1="14"
          x2="20"
          y2="10"
          stroke="#f8fafc"
          strokeWidth="1.2"
        />
        
        {/* White dividing line - bottom */}
        <line
          x1="8"
          y1="20"
          x2="20"
          y2="18"
          stroke="#f8fafc"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
};

export default SimpleCursor;
