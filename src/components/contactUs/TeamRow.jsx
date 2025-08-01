const TeamRow = ({ member, onHover, onClick }) => {
  return (
    <div
      className="team-row"
      tabIndex={0}
      role="button"
      aria-label={`View details for ${member.name}`}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <h3 className="team-name">{member.name}</h3>
      <div className="team-row-connector"></div>
      <p className="team-position">{member.position}</p>
    </div>
  );
};

export default TeamRow;
