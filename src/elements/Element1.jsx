import React, { useState, useEffect } from 'react';

const PawPrint = ({ filled, isActive, index }) => {
  // Create walking pattern - alternating up and down with right tilt
  const getTransform = () => {
    const isEven = index % 2 === 0;
    const yOffset = isEven ? -8 : 8; // Up and down pattern
    const rotation = 75; // Tilt right
    const scale = isActive ? 1.2 : 1;
    
    return `translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`;
  };

  return (
    <div className="relative">
      {/* Glow effect for active paw */}
      {isActive && (
        <div className="absolute inset-0 animate-pulse" style={{ 
          filter: 'blur(8px)',
          color: '#5D4037',
          transform: getTransform()
        }}>
          <svg width="32" height="32" viewBox="0 0 100 100" fill="currentColor">
            {/* Rounder paw design */}
            <circle cx="35" cy="25" r="8" />
            <circle cx="65" cy="25" r="8" />
            <circle cx="25" cy="45" r="6" />
            <circle cx="75" cy="45" r="6" />
            <ellipse cx="50" cy="65" rx="18" ry="15" />
          </svg>
        </div>
      )}
      
      {/* Main paw */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 100 100" 
        fill={filled ? '#5D4037' : 'rgba(93, 64, 55, 0.2)'}
        className="relative z-10 transition-all duration-500 ease-out"
        style={{
          transform: getTransform()
        }}
      >
        {/* Rounder paw design - main pad and 4 toes */}
        <circle cx="35" cy="25" r="8" />
        <circle cx="65" cy="25" r="8" />
        <circle cx="25" cy="45" r="6" />
        <circle cx="75" cy="45" r="6" />
        <ellipse cx="50" cy="65" rx="18" ry="15" />
      </svg>
    </div>
  );
};

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
          }, 1000); // Show for 2 seconds after completion
          return 100;
        }
        return prev + 5; // Faster, consistent progress
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  const pawsToFill = Math.floor((progress / 100) * 5);
  const activePaw = Math.min(pawsToFill, 4);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50" 
      style={{ backgroundColor: '#FDF6E3' }}
    >
      <div 
        className="flex flex-col items-center justify-center max-w-md mx-auto px-8"
        style={{ color: '#5D4037' }}
      >
        
        {/* Cat Loading Animation */}
        <div className="mb-8">
          <img 
            src="/images/cl.gif" 
            className="h-64 w-64 object-contain drop-shadow-lg" 
            alt="Loading cat animation" 
          />
        </div>

        {/* Loading Text */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Please be patient
          </h2>
          <p className="text-lg opacity-70 font-medium">
            Your website is loading...
          </p>
        </div>

          {/* Paw Progress Indicator */}
          <div className="flex items-center justify-center space-x-6">
            {[0, 1, 2, 3, 4].map(pawIndex => (
              <PawPrint 
                key={pawIndex}
                filled={pawIndex < pawsToFill}
                isActive={pawIndex === activePaw && progress < 100}
                index={pawIndex}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default LoadingScreen;