import React, { useEffect, useRef } from 'react';

function Navbar() {
  const catimgref = useRef(null);
  const eyeref = useRef([]);

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
    });
  };

  const handleCatClick = () => {
    if (catimgref.current) {
      catimgref.current.style.cursor = 'grabbing';
      setTimeout(() => {
        catimgref.current.style.cursor = 'grab';
      }, 200);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', eyetrack);
    if (catimgref.current) {
      catimgref.current.addEventListener('click', handleCatClick);
    }
  }, []);

  const handleheroscroll = () => {
    const herosect = document.getElementById('hero');
    herosect?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleprojclick = () => {
    const projsection = document.getElementById('project');
    projsection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className='flex justify-center sm:justify-between fixed w-screen z-50 h-[38px]'>
        <div className='hidden text-3xl cursor-pointer w-[88px] pl-1 sm:block'>Catcafe</div>
        <ul className='flex gap-4 p-3 sm:p-1 text-xl h-max'>
          <li className='navlist' onClick={handleheroscroll}>
            Home
          </li>
          <li className='navlist' onClick={handleprojclick}>
            Projects
          </li>
          <li className='hidden sm:block navlist'>
            <a href='https://github.com/RaviPatel94' target='blank'>GitHub</a>
          </li>
          <li className='navlist'>
            <a href='/Ravipatelresume.pdf' target='blank'>Resume</a>
          </li>
        </ul>
        <div className='hidden md:block relative w-[90px] h-[90px]'>
          <img
            ref={catimgref}
            src='/images/cat.png'
            alt='Cat'
            width='90px'
            height='90px'
            className='cursor-grab peer absolute top-0 left-0'
          />
          <div
            ref={(el) => (eyeref.current[0] = el)}
            className='h-2 w-2 bg-black rounded-full absolute top-[52px] left-[29px] overflow-hidden'
            id='left-eye'
          >
            <div className='bg-white h-[5px] w-[5px] rounded-full'></div>
          </div>
          <div
            ref={(el) => (eyeref.current[1] = el)}
            className='h-2 w-2 bg-black rounded-full absolute top-[52px] left-[54px] overflow-hidden'
            id='right-eye'
          >
            <div className='bg-white h-[5px] w-[5px] rounded-full'></div>
          </div>
          <div className='absolute top-full text-white left-1/2 -translate-x-1/2 p-1 mt-1 bg-primary border border-secondary opacity-0 peer-hover:opacity-100 cursor-default transition-opacity duration-700 text-sm rounded'>
            Hello visitor!
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
