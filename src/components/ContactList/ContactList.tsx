import React from 'react';
import styles from './contactList.module.scss';

const ContactList: React.FC = ({children}) => {
  return <div className={styles.contactList}>{children}</div>;
};

export default ContactList;
