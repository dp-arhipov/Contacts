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
            key={contact.phoneNumber}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
