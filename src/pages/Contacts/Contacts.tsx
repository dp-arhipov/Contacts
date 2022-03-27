import React, {Fragment, useEffect} from 'react';
import styles from './contacts.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import ContactList from '../../components/ContactList';
import SearchField from '../../components/SearchField';
import {RootState} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {addContacts, selectContactsData} from '../../store/reducers/ContactsSlice';
const Contacts: React.FC = () => {
  const contactsData = [
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
    {name: 'Иван Петров', phoneNumber: '89253748732'},
  ];
  const contacts = [{name: 'Иван Петров', phoneNumber: '89253748732'}];

  const dispatch = useAppDispatch();
  const contacts_ = useAppSelector(selectContactsData);

  useEffect(() => {
    //dispatch(addContacts(contactsData));
  }, []);

  return (
    <div className={styles.contacts}>
      <button onClick={() => dispatch(addContacts(contactsData))}>Добавить</button>
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
