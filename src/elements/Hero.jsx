import React from 'react'

function Hero() {

    const handleaboutscroll=()=>{
      const herosect=document.getElementById("about")
      herosect?.scrollIntoView({behavior:"smooth"})
    }
    const handlecontactscroll=()=>{
      const herosect=document.getElementById("contact")
      herosect?.scrollIntoView({behavior:"smooth"})
    }

  return (
    <div className='h-screen w-screen text-center flex flex-col items-center font-mono justify-center bg-[#FDF6E3] px-4'>
      <p className='w-full max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 mt-12 leading-tight sm:leading-tight md:leading-tight lg:leading-tight'>
        The Purrrfeact Cat Cafe you have been looking for!!!  
      </p>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-0'>
        <button 
          className='px-4 py-2 sm:px-3 sm:py-2 bg-white border sm:mr-3 border-[#5D4037] rounded-2xl cursor-pointer text-sm sm:text-base hover:bg-[#5D4037] hover:text-white transition-all duration-200' 
          onClick={handleaboutscroll}
        >
          About Us
        </button>
        <button 
          className='px-4 py-2 sm:px-3 sm:py-2 bg-white border border-[#5D4037] rounded-2xl cursor-pointer text-sm sm:text-base hover:bg-[#5D4037] hover:text-white transition-all duration-200' 
          onClick={handlecontactscroll}
        >
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Hero