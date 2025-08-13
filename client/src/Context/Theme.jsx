import React, { useEffect, useState } from "react";

// Beautiful Custom Sun and Moon SVG icons with gradients
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#F59E0B" />
      </radialGradient>
      <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="4" fill="url(#sunGradient)" filter="url(#sunGlow)"/>
    <g stroke="#F59E0B" strokeWidth="2" strokeLinecap="round">
      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" opacity="0.8"/>
    </g>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#moonGradient)" filter="url(#moonGlow)"/>
    <circle cx="15" cy="8" r="1" fill="#F1F5F9" opacity="0.7"/>
    <circle cx="17" cy="11" r="0.5" fill="#F1F5F9" opacity="0.5"/>
    <circle cx="14" cy="13" r="0.8" fill="#F1F5F9" opacity="0.6"/>
  </svg>
);

// Custom Tooltip Component with Tailwind
const Tooltip = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 px-3 py-2 mt-3 text-sm font-medium text-white bg-gray-900/90 backdrop-blur-sm rounded-lg whitespace-nowrap left-1/2 transform -translate-x-1/2 shadow-xl border border-gray-700/50">
          {title}
          <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/90" />
        </div>
      )}
    </div>
  );
};

const ThemeContext = () => {
    // Use in-memory storage instead of localStorage for Claude.ai compatibility
    const [theme, setTheme] = useState("light");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        // Note: localStorage removed for Claude.ai compatibility
    }, [theme]);

    const toggleTheme = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setTheme(prev => (prev === "light" ? "dark" : "light"));
            setIsAnimating(false);
        }, 150);
    };

    return (
        <Tooltip 
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            placement="bottom"
        >
            <button
                onClick={toggleTheme}
                className="
                    w-12 h-12 
                    rounded-full 
                    border-2 border-gray-300 border-opacity-30
                    bg-gradient-to-br from-white/10 to-white/5
                    backdrop-blur-sm
                    text-gray-200
                    flex items-center justify-center
                    transition-all duration-500 ease-out
                    hover:border-gray-200 hover:border-opacity-60
                    hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10
                    hover:scale-110 hover:-translate-y-1
                    hover:shadow-2xl hover:shadow-purple-500/20
                    active:scale-95 active:translate-y-0
                    focus:outline-none focus:ring-4 focus:ring-purple-500/30
                    relative overflow-hidden
                    cursor-pointer
                    group
                "
            >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-1000" style={{animationDuration: '3s'}} />
                
                <div 
                    className={`
                        flex items-center justify-center
                        transition-all duration-500 ease-out
                        relative z-10
                        ${isAnimating 
                            ? 'rotate-180 scale-75 opacity-60' 
                            : 'rotate-0 scale-100 opacity-100'
                        }
                        group-hover:scale-110
                        drop-shadow-lg
                    `}
                >
                    {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </div>
            </button>
        </Tooltip>
    );
};

export default ThemeContext;



// import React, { createContext, useEffect, useState } from 'react';

// export const ThemeContext = createContext();

// const Theme = ({ children }) => {
//   const [theme, setTheme] = useState(localStorage.getItem('mode') || 'light');

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('mode', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default Theme;

