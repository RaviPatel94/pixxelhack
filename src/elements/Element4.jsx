import React from 'react';
import { X, Info, Briefcase, Mail } from 'lucide-react';

const NavigationDrawer = ({ isOpen, onClose }) => {
  const handleAboutScroll = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
    onClose(); 
  };

  const handleTeamScroll = () => {
    const teamSection = document.getElementById("team");
    teamSection?.scrollIntoView({ behavior: "smooth" });
    onClose(); 
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    onClose(); 
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[50%] bg-white shadow-2xl z-50 transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Menu
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Navigate through our sections</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 hover:rotate-90 group"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600 cursor-pointer group-hover:text-gray-800 transition-colors" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 flex flex-col justify-center">
          <div className="relative w-full group-container">
            
            {/* About Us */}
            <div className="relative menu-item-wrapper" style={{ zIndex: 3 }}>
              <button
                onClick={handleAboutScroll}
                className="w-full border border-gray-200 bg-white cursor-pointer flex items-center space-x-6 p-6 sm:p-8 text-black font-semibold transition-all duration-500 ease-out relative overflow-hidden group hover:shadow-2xl hover:z-50 hover:bg-gradient-to-r hover:from-[#5D4037] hover:to-[#6D4C41] hover:text-white hover:border-transparent hover:py-10 sm:hover:py-12 hover:scale-[1.02] hover:-mx-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] to-[#6D4C41] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 group-hover:bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-all duration-500 ease-out relative z-10">
                  <Info size={24} className="sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="flex-1 text-left relative z-10">
                  <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-wide transition-colors duration-500">
                    About Us
                  </span>
                  <div className="w-0 group-hover:w-full h-0.5 bg-white/30 transition-all duration-700 ease-out mt-2"></div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-gray-400 group-hover:border-white/70 transform rotate-45 transition-colors duration-500"></div>
                </div>
              </button>
            </div>

            {/* Team */}
            <div className="relative menu-item-wrapper" style={{ zIndex: 2, marginTop: '-1px' }}>
              <button
                onClick={handleTeamScroll}
                className="w-full border border-gray-200 bg-white cursor-pointer flex items-center space-x-6 p-6 sm:p-8 text-black font-semibold transition-all duration-500 ease-out relative overflow-hidden group hover:shadow-2xl hover:z-50 hover:bg-gradient-to-r hover:from-[#5D4037] hover:to-[#6D4C41] hover:text-white hover:border-transparent hover:py-10 sm:hover:py-12 hover:scale-[1.02] hover:-mx-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] to-[#6D4C41] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 group-hover:bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-all duration-500 ease-out relative z-10">
                  <Briefcase size={24} className="sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="flex-1 text-left relative z-10">
                  <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-wide transition-colors duration-500">
                    Team
                  </span>
                  <div className="w-0 group-hover:w-full h-0.5 bg-white/30 transition-all duration-700 ease-out mt-2"></div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-gray-400 group-hover:border-white/70 transform rotate-45 transition-colors duration-500"></div>
                </div>
              </button>
            </div>

            {/* Contact */}
            <div className="relative menu-item-wrapper" style={{ zIndex: 1, marginTop: '-1px' }}>
              <button
                onClick={handleContactScroll}
                className="w-full border border-gray-200 bg-white cursor-pointer flex items-center space-x-6 p-6 sm:p-8 text-black font-semibold transition-all duration-500 ease-out relative overflow-hidden group hover:shadow-2xl hover:z-50 hover:bg-gradient-to-r hover:from-[#5D4037] hover:to-[#6D4C41] hover:text-white hover:border-transparent hover:py-10 sm:hover:py-12 hover:scale-[1.02] hover:-mx-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] to-[#6D4C41] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 group-hover:bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-all duration-500 ease-out relative z-10">
                  <Mail size={24} className="sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="flex-1 text-left relative z-10">
                  <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-wide transition-colors duration-500">
                    Contact
                  </span>
                  <div className="w-0 group-hover:w-full h-0.5 bg-white/30 transition-all duration-700 ease-out mt-2"></div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-gray-400 group-hover:border-white/70 transform rotate-45 transition-colors duration-500"></div>
                </div>
              </button>
            </div>

          </div>
        </div>

        <style jsx>{`
          .group-container:hover .menu-item-wrapper:not(:hover) {
            transform: translateY(0);
          }
          
          .menu-item-wrapper:hover ~ .menu-item-wrapper {
            transform: translateY(40px);
            transition: transform 0.5s ease-out;
          }
          
          .menu-item-wrapper {
            transition: transform 0.5s ease-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default NavigationDrawer;