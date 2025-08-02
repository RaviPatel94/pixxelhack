import React, { useEffect, useState } from 'react';

const BentoGrid = ({ children, className = "", ...props }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 640);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`grid w-full gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
      style={{ 
        // Use CSS Grid template rows for better control
        gridTemplateRows: windowWidth >= 640 ? 'repeat(2, 1fr)' : 'auto',
        height: windowWidth >= 640 ? '70vh' : 'auto',
        minHeight: windowWidth >= 640 ? '500px' : 'auto'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className = "",
  background,
  Icon = () => null,
  description,
  href = "#",
  cta,
  isLarge = false,
  ...props
}) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 640);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      key={name}
      className={`group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      style={{ 
        // Let grid handle the height on larger screens, set min-height for mobile
        height: windowWidth < 640 ? 'auto' : '100%',
        minHeight: windowWidth < 640 ? '300px' : 'unset'
      }}
      {...props}
    >
      <div className={`relative ${windowWidth >= 640 && isLarge ? 'h-3/4' : 'h-48 sm:h-2/3'} overflow-hidden flex-shrink-0`}>
        {background}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className={`p-4 flex flex-col justify-between flex-grow bg-white`}>
        <div className="space-y-2">
          <Icon className="h-6 w-6 text-gray-700 mb-1" />
          <h3 className={`${isLarge ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-semibold text-gray-800 leading-tight`}>
            {name}
          </h3>
          <p className={`${isLarge ? 'text-base' : 'text-sm'} text-gray-600 line-clamp-3 sm:line-clamp-2`}>
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

function Element3() {
  useEffect(() => {
    // AOS would be initialized here if available
    // AOS.init({ duration: 800 });
  }, []);

  const sampleImages = {
    cafe: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=800&h=600&fit=crop",
    cats: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop",
    treats: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    events: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop"
  };

  return (
    <div className='min-h-screen px-4 py-8 sm:py-12' id='about'>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-4xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Best Cat Cafe in Mumbai - Where Coffee Meets Cats
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div>
          <BentoGrid>
            <BentoCard
              name="Our Cat Cafe"
              description="A purr-fect space where you can sip coffee while cuddling with our friendly rescue cats. Experience the joy of feline companionship."
              className="col-span-1 sm:col-span-1 lg:col-span-1 sm:row-span-2 lg:row-span-2"
              isLarge={true}
              background={
                <img
                  src={sampleImages.cafe}
                  alt="Cozy cat cafe interior with cats"
                  className="w-full h-full object-cover"
                />
              }
              cta="Visit Us"
            />
            <BentoCard
              name="Meet Our Cats"
              description="Adorable rescue cats looking for love and playtime."
              className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1"
              background={
                <img
                  src={sampleImages.cats}
                  alt="Cute cats available for adoption"
                  className="w-full h-full object-cover"
                />
              }
              cta="Meet Them"
            />
            <BentoCard
              name="Coffee & Treats"
              description="Premium coffee and pastries served with a side of purrs."
              className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1"
              background={
                <img
                  src={sampleImages.treats}
                  alt="Cat-themed coffee and pastries"
                  className="w-full h-full object-cover"
                />
              }
              cta="See Menu"
            />
            <BentoCard
              name="Events & Adoption"
              description="Join our adoption events, cat yoga sessions, and community gatherings for cat lovers in Mumbai."
              className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1"
              background={
                <img
                  src={sampleImages.events}
                  alt="Cat adoption and yoga events"
                  className="w-full h-full object-cover"
                />
              }
              cta="Learn More"
            />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

export default Element3;