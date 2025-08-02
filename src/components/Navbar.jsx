import React, { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react';
import NavigationDrawer from '@/elements/Element4';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const catimgref = useRef(null)
  const eyeref = useRef([])
  
  const eyetrack = (event) => {
    eyeref.current.forEach((eye) => {
      if (eye) { 
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const moveDistance = 2;
        const xMove = Math.cos(angle) * moveDistance;
        const yMove = Math.sin(angle) * moveDistance;
        eye.style.transform = `translate(${xMove}px, ${yMove}px)`;
      }
    })
  }

  const handleCatClick = () => {
    if (catimgref.current) {
      catimgref.current.style.cursor = 'grabbing';
      setTimeout(() => {
        catimgref.current.style.cursor = 'grab';
      }, 200);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", eyetrack)

    if (catimgref.current) {
      catimgref.current.addEventListener('click', handleCatClick);
    }

    return () => {
      document.removeEventListener("mousemove", eyetrack);
    }
  }, [])

  const handleheroscroll = () => {
    const herosect = document.getElementById("hero")
    herosect?.scrollIntoView({behavior:"smooth"})
  }

  const handleprojclick = () => {
    const projsection = document.getElementById("project")
    projsection?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div>
      <nav className='flex justify-between fixed w-screen z-50 h-[38px] bg-[#FDF6E3] backdrop-blur-sm px-4'>
        <div className='text-3xl cursor-pointer w-[88px] pl-1 sm:block'>
          <img src="/images/logo.jpg" alt="logo" className='h-12 mt-1 w-12' />
        </div>
        
        <div className="relative hidden sm:block">
          <img ref={catimgref} src="/images/cat.png" alt="Cat" width="90px" className="cursor-grab peer"/>
          
          {/* Left eye */}
          <div ref={(el) => (eyeref.current[0] = el)} 
              className="h-2 w-2 bg-black rounded-full absolute z-50 overflow-hidden" 
              style={{ top: '51px', left: '29px' }} 
              id="left-eye">
              <div className="bg-white h-1 w-1 rounded-full"></div>
          </div>
          
          {/* Right eye */}
          <div ref={(el) => (eyeref.current[1] = el)} 
              className="h-2 w-2 bg-black rounded-full absolute z-50 overflow-hidden" 
              style={{ top: '51px', left: '54px' }} 
              id="right-eye">
              <div className="bg-white h-1 w-1 rounded-full"></div>
          </div>
          
          <div className='p-0.5 bg-primary border border-secondary opacity-0 peer-hover:opacity-100 cursor-default transition-opacity duration-700'>
              Hello visitor!
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 pl-10 rounded-md transition-colors duration-200 z-50"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-gray-700 cursor-pointer" />
        </button>
      </nav>

      {/* Navigation Drawer */}
      <NavigationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={(section) => {
          setIsDrawerOpen(false);
          if (section === 'hero') handleheroscroll();
          if (section === 'project') handleprojclick();
        }}
      />
    </div>
  )
}

export default Navbar