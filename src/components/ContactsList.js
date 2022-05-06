import React from "react";

const ContactsList = ({ contact }) => {
  return (
    <li>
      <div>
        <img className="img-resp" src={contact.src} alt={contact.alt} />
        <p>{contact.name}</p>
        {contact.link === "yes" ? (
          <p>
            <a target="_blank" rel="noreferrer" href={contact.value}>
              {contact.value}
            </a>
          </p>
        ) : contact.link === "mail" ? (
          <p>
            <a href={`mailto:${contact.value}`}>{contact.value}</a>
          </p>
        ) : (
          <p>{contact.value}</p>
        )}
      </div>
    </li>
  );
};

export default ContactsList;
