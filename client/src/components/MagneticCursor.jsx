import { useEffect, useRef, useState } from 'react';

/**
 * MagneticCursor - Enhanced cursor with magnetic attraction to interactive elements
 * 
 * This is an advanced variation of ModernCursor with:
 * - Magnetic pull towards buttons/links
 * - Click ripple effects
 * - Smoother animations
 * - Text labels on hover
 */
const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [cursorLabel, setCursorLabel] = useState('');

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };
    
    checkTouchDevice();
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let glowX = 0;
    let glowY = 0;
    let targetElement = null;

    const animate = () => {
      // Magnetic effect - pull towards interactive elements
      let targetX = mouseX;
      let targetY = mouseY;

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(centerX - mouseX, centerY - mouseY);
        
        // Apply magnetic pull within 80px radius
        if (distance < 80) {
          const magnetStrength = 0.15 * (1 - distance / 80);
          targetX += (centerX - mouseX) * magnetStrength;
          targetY += (centerY - mouseY) * magnetStrength;
        }
      }

      // Smooth easing
      cursorX += (targetX - cursorX) * 0.2;
      cursorY += (targetY - cursorY) * 0.2;
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      glow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetElement = document.elementFromPoint(mouseX, mouseY);
    };

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      const label = e.currentTarget.dataset?.cursorLabel;
      if (label) setCursorLabel(label);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorLabel('');
    };

    const handleClick = (e) => {
      const ripple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples(prev => [...prev, ripple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== ripple.id));
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .cursor-hover, .card-hover'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`modern-cursor ${isHovering ? 'modern-cursor--hover' : ''}`}
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="modern-cursor__icon"
        >
          <path
            d="M3 3 L3 18 L9 12 L13 21 L15 20 L11 11 L21 11 Z"
            className="modern-cursor__path"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Cursor Label */}
        {cursorLabel && (
          <div className="cursor-label">
            {cursorLabel}
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div
        ref={glowRef}
        className={`modern-cursor-glow ${isHovering ? 'modern-cursor-glow--hover' : ''}`}
        aria-hidden="true"
      />

      {/* Click Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default MagneticCursor;
