import React, {Fragment} from 'react';
import styles from './contacts.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import ContactList from '../../components/ContactList';
import SearchField from '../../components/SearchField';

const Contacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <Container maxWidth="xs" sx={{height: '100%'}}>
        <div className={styles.wrapper}>
          <div className={styles.searchField}>
            <SearchField />
          </div>
          <div className={styles.contactList}>
            <ContactList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
