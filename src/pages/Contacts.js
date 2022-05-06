import React from "react";
import ContactsList from "../components/ContactsList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contacts from "../data/Contacts";

const Contacts = () => {
  return (
    <div>
      <Header />
      <div className="contact-pres">
        <ul>
          {contacts.map((contact) => (
            <ContactsList key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
