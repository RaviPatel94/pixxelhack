import React from 'react';
import { X, Home, User, Briefcase, Mail, Info } from 'lucide-react';

const NavigationDrawer = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { 
      id: 'about', 
      label: 'About Us', 
      icon: Info,
      color: 'hover:bg-[#5D4037] bg-[#5D4037] ' 
    },
    { 
      id: 'works', 
      label: 'Works', 
      icon: Briefcase,
      color: 'hover:bg-[#5D4037] bg-[#5D4037] ' 
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: Mail,
      color: 'hover:bg-[#5D4037] bg-[#5D4037] ' 

    }
  ];

  const handleItemClick = (itemId) => {
    onNavigate(itemId);
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold t">
              Menu
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Navigate through our sections</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 hover:rotate-90 group"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600 group-hover:text-gray-800 transition-colors" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 flex flex-col justify-center">
          <div className="relative max-w-2xl mx-auto w-full group-container">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="relative menu-item-wrapper"
                  style={{
                    zIndex: menuItems.length - index,
                    marginTop: index === 0 ? '0' : '-1px'
                  }}
                >
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full border border-gray-200 bg-white cursor-pointer flex items-center space-x-6 p-6 sm:p-8 text-black font-semibold transition-all duration-500 ease-out relative overflow-hidden group hover:shadow-2xl hover:z-50
                      hover:bg-gradient-to-r hover:${item.color} hover:text-white hover:border-transparent hover:py-10 sm:hover:py-12 hover:scale-[1.02]`}
                  >
                    {/* Background gradient overlay for smooth color transition */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}></div>
                    
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 group-hover:bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-all duration-500 ease-out relative z-10">
                      <IconComponent size={24} className="sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <div className="flex-1 text-left relative z-10">
                      <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-wide transition-colors duration-500">
                        {item.label}
                      </span>
                      <div className="w-0 group-hover:w-full h-0.5 bg-white/30 transition-all duration-700 ease-out mt-2"></div>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                      <div className="w-3 h-3 border-t-2 border-r-2 border-gray-400 group-hover:border-white/70 transform rotate-45 transition-colors duration-500"></div>
                    </div>
                  </button>
                </div>
              );
            })}
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