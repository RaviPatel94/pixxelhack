import React, { useState } from "react";
import TeamRow from "./TeamRow";
import HoverCard from "./HoverCard";
import { teamMembers } from "./teamInfo/teamMembers";

const TeamDirectory = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMouseEnter = (member) => setHoveredMember(member);
  const handleMouseLeave = () => setHoveredMember(null);

  return (
    <div className="container">
      <header className="team-header">
        <h1>Our Team</h1>
        <p className="team-subtitle">
          Meet the amazing people behind our success
        </p>
      </header>

      <div className="team-list">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            onMouseEnter={() => handleMouseEnter(member)}
            onMouseLeave={handleMouseLeave}
            className="team-row-wrapper"
          >
            <TeamRow member={member} />
            {hoveredMember && (
              <>
                {/* Background Blur Overlay */}
                <div className="hover-blur-overlay" />

                {/* Hover Card */}
                <HoverCard
                  member={hoveredMember}
                  onMouseEnter={() => handleMouseEnter(hoveredMember)}
                  onMouseLeave={handleMouseLeave}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDirectory;
