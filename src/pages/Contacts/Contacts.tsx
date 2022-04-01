import React, {useEffect} from 'react';
import styles from './contacts.module.scss';
import Container from '@mui/material/Container';
import ContactList from '../../components/ContactList';
import SearchField from '../../components/SearchField';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {selectContactsData} from '../../store/reducers/contactsSlice';
import {getContacts} from '../../store/actions/contactsActions';
import Header from '../../components/Header/Header';

const Contacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts_ = useAppSelector(selectContactsData);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={styles.contacts}>
      <Header />
      <Container maxWidth="sm" sx={{height: '100%'}}>
        <div className={styles.wrapper}>
          <div className={styles.searchField}>
            <SearchField />
          </div>
          <div className={styles.contactList}>
            <ContactList contacts={contacts_} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
