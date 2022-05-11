import React from "react";

const ContactsList = ({ contact }) => {
  return (
    <li>
      <div>
        {contact.link === "yes" ? (
          <p>
            <a target="_blank" rel="noreferrer" href={contact.value}>
              <img className="img-resp" src={contact.src} alt={contact.alt} />
            </a>
          </p>
        ) : contact.link === "mail" ? (
          <div>
            <img className="img-resp" src={contact.src} alt={contact.alt} />
            <p>
              <a href={`mailto:${contact.value}`}>{contact.value}</a>
            </p>
          </div>
        ) : (
          <div>
            <img className="img-resp" src={contact.src} alt={contact.alt} />
            <p>{contact.value}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default ContactsList;
