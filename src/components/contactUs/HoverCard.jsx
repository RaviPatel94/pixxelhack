import { contactIcons } from './teamInfo/teamMembers';

const HoverCard = ({ member, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="hover-card visible"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="hover-card-content">
        <button className="hover-card-close" aria-label="Close">&times;</button>

        <div className="hover-card-image">
          <img src={member.image} alt={`${member.name}'s profile`} className="profile-image" />
        </div>

        <div className="hover-card-info">
          <h3 className="card-name">{member.name}</h3>
          <p className="card-position">{member.position}</p>
          <p className="card-bio">{member.bio}</p>
          <div className="card-contacts">
            {Object.entries(member.contacts).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label={`${member.name}'s ${key}`}
              >
                <span className="contact-icon">{contactIcons[key]}</span>
                <span>{key[0].toUpperCase() + key.slice(1)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
