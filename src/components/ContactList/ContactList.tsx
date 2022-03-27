import React, {Fragment} from 'react';
import styles from './contactList.module.scss';
import ContactCard from '../ContactCard';
import {Contact} from '../../types';

type ContactListProps = {
  contacts: Contact[];
};
const ContactList: React.FC<ContactListProps> = ({contacts}) => {
  return (
    <div className={styles.contactList}>
      {contacts.map(contact => {
        return (
          <ContactCard
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
