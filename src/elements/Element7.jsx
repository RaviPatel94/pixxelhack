import React, { useState, useEffect } from "react";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "David Kim",
    position: "DevOps Engineer",
    bio: "Infrastructure specialist with deep knowledge of cloud platforms and automation. Always optimizing for performance and reliability.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    contacts: {
      email: "david@company.com",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    bio: "Strategic product leader with expertise in user research and agile methodologies. Loves turning complex problems into simple solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    contacts: {
      email: "michael@company.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX Designer",
    bio: "Creative designer focused on accessibility and inclusive design. Believes great design should be invisible and intuitive.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    contacts: {
      email: "emily@company.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      portfolio: "https://emilydesigns.com"
    }
  },
];

const contactIcons = {
  email: "✉️",
  linkedin: "💼",
  github: "🐙",
  twitter: "🐦",
  portfolio: "🌐"
};

const TeamDirectory = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, flipX: false, flipY: false });

  const calculateTooltipPosition = (mouseX, mouseY) => {
    const tooltipWidth = 320; // max-w-80 = 320px
    const tooltipHeight = 200; // approximate height
    const offset = 15;
    const padding = 10; // padding from screen edges

    let x = mouseX + offset;
    let y = mouseY - offset;
    let flipX = false;
    let flipY = false;

    // Check horizontal boundaries
    if (x + tooltipWidth > window.innerWidth - padding) {
      x = mouseX - tooltipWidth - offset;
      flipX = true;
    }
    if (x < padding) {
      x = padding;
    }

    // Check vertical boundaries
    if (y + tooltipHeight > window.innerHeight - padding) {
      y = mouseY - tooltipHeight + offset;
      flipY = true;
    }
    if (y < padding) {
      y = padding;
    }

    return { x, y, flipX, flipY };
  };

  const handleMouseEnter = (member, event) => {
    setHoveredMember(member);
    const position = calculateTooltipPosition(event.clientX, event.clientY);
    setMousePosition({ x: event.clientX, y: event.clientY });
    setTooltipPosition(position);
  };

  const handleMouseMove = (event) => {
    if (hoveredMember) {
      const position = calculateTooltipPosition(event.clientX, event.clientY);
      setMousePosition({ x: event.clientX, y: event.clientY });
      setTooltipPosition(position);
    }
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  useEffect(() => {
    if (hoveredMember) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [hoveredMember]); 

  return (
    <div className="font-sans h-screen flex flex-col justify-center items-center max-w-3xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-mono font-semibold mb-2">Our Team</h1>
        <p className="text-lg">
          Meet the amazing people behind our success
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            onMouseEnter={(e) => handleMouseEnter(member, e)}
            onMouseLeave={handleMouseLeave}
            className="flex items-center p-6 bg-white rounded-xl shadow-sm cursor-pointer transition-all duration-200 border border-slate-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold m-0 min-w-[200px]">
              {member.name}
            </h3>
            
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent mx-6"></div>
            
            <p className="text-base text-slate-600 m-0 font-medium">
              {member.position}
            </p>
          </div>
        ))}
      </div>

      {hoveredMember && (
        <div
          className="fixed bg-white border border-slate-200 rounded-xl shadow-xl p-6 max-w-80 z-50 pointer-events-none transition-all duration-150 ease-out"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          <div className="flex items-center mb-4">
            <img 
              src={hoveredMember.image} 
              alt={`${hoveredMember.name}'s profile`}
              className="w-15 h-15 rounded-full object-cover mr-4 border-2 border-slate-200"
            />
            <div>
              <h3 className="text-lg font-semibold text-slate-800 m-0 mb-1">
                {hoveredMember.name}
              </h3>
              <p className="text-sm text-indigo-600 m-0 font-medium">
                {hoveredMember.position}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed m-0 mb-4">
            {hoveredMember.bio}
          </p>

        </div>
      )}
    </div>
  );
};

export default TeamDirectory;