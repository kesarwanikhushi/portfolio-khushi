import { useEffect } from 'react';

/**
 * useCursorTheme - Hook to dynamically update cursor colors based on theme
 * 
 * @param {string} theme - 'dark' | 'light' | 'auto'
 * @param {object} customColors - Optional custom color overrides
 * 
 * @example
 * // In your App or theme provider:
 * import useCursorTheme from './hooks/useCursorTheme';
 * 
 * function App() {
 *   const [theme, setTheme] = useState('dark');
 *   useCursorTheme(theme);
 *   // ...
 * }
 * 
 * // With custom colors:
 * useCursorTheme('dark', {
 *   cursorColor: '#00ff88',
 *   hoverColor: '#bf40ff'
 * });
 */
const useCursorTheme = (theme = 'dark', customColors = {}) => {
  useEffect(() => {
    const root = document.documentElement;

    // Default color palettes
    const themes = {
      dark: {
        cursorColor: '#00d9ff',
        cursorGlow: 'rgba(0, 217, 255, 0.5)',
        hoverColor: '#bf40ff',
        hoverGlow: 'rgba(191, 64, 255, 0.6)',
      },
      light: {
        cursorColor: '#0e7490',
        cursorGlow: 'rgba(14, 116, 144, 0.3)',
        hoverColor: '#86198f',
        hoverGlow: 'rgba(134, 25, 143, 0.4)',
      },
    };

    // Auto theme detection
    let activeTheme = theme;
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      activeTheme = prefersDark ? 'dark' : 'light';
    }

    // Get theme colors
    const colors = themes[activeTheme] || themes.dark;

    // Apply custom color overrides
    const finalColors = {
      cursorColor: customColors.cursorColor || colors.cursorColor,
      cursorGlow: customColors.cursorGlow || colors.cursorGlow,
      hoverColor: customColors.hoverColor || colors.hoverColor,
      hoverGlow: customColors.hoverGlow || colors.hoverGlow,
    };

    // Set CSS variables
    root.style.setProperty('--cursor-color', finalColors.cursorColor);
    root.style.setProperty('--cursor-glow', finalColors.cursorGlow);
    root.style.setProperty('--cursor-hover-color', finalColors.hoverColor);
    root.style.setProperty('--cursor-hover-glow', finalColors.hoverGlow);

    // Listen for system theme changes if auto
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        const newColors = themes[newTheme];
        
        root.style.setProperty('--cursor-color', newColors.cursorColor);
        root.style.setProperty('--cursor-glow', newColors.cursorGlow);
        root.style.setProperty('--cursor-hover-color', newColors.hoverColor);
        root.style.setProperty('--cursor-hover-glow', newColors.hoverGlow);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, customColors]);
};

export default useCursorTheme;


/**
 * USAGE EXAMPLES:
 * 
 * 1. Basic theme switching:
 * ```jsx
 * import useCursorTheme from './hooks/useCursorTheme';
 * 
 * function App() {
 *   const [isDark, setIsDark] = useState(true);
 *   useCursorTheme(isDark ? 'dark' : 'light');
 *   
 *   return (
 *     <div>
 *       <button onClick={() => setIsDark(!isDark)}>
 *         Toggle Theme
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 * 
 * 2. Custom brand colors:
 * ```jsx
 * useCursorTheme('dark', {
 *   cursorColor: '#00ff88',
 *   hoverColor: '#ff0080'
 * });
 * ```
 * 
 * 3. Auto system theme:
 * ```jsx
 * useCursorTheme('auto'); // Follows OS preference
 * ```
 * 
 * 4. Different colors per route:
 * ```jsx
 * const location = useLocation();
 * const cursorColors = {
 *   '/': { cursorColor: '#00d9ff' },
 *   '/projects': { cursorColor: '#00ff88' },
 *   '/contact': { cursorColor: '#bf40ff' }
 * };
 * useCursorTheme('dark', cursorColors[location.pathname]);
 * ```
 * 
 * 5. Seasonal themes:
 * ```jsx
 * const month = new Date().getMonth();
 * const seasonalColors = {
 *   winter: { cursorColor: '#00d9ff', hoverColor: '#7dd3fc' },
 *   spring: { cursorColor: '#00ff88', hoverColor: '#86efac' },
 *   summer: { cursorColor: '#fb923c', hoverColor: '#fbbf24' },
 *   autumn: { cursorColor: '#f97316', hoverColor: '#ef4444' }
 * };
 * 
 * const season = month < 3 ? 'winter' : month < 6 ? 'spring' : 
 *                month < 9 ? 'summer' : 'autumn';
 * useCursorTheme('dark', seasonalColors[season]);
 * ```
 */
