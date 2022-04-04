import React, {useEffect, useState} from 'react';
import styles from './contacts.module.scss';
import Container from '@mui/material/Container';
import ContactList from '../../components/ContactList';
import SearchField from '../../components/SearchField';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {deleteContact, lastContactId, selectContactsData} from '../../store/reducers/contactsSlice';
import {getContacts} from '../../store/actions/contactsActions';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal';
import ContactModifyForm from '../../components/ContactModifyForm';
import ContactCard from '../../components/ContactCard';
import {Contact} from '../../types';
import AddButton from '../../components/AddButton';

const Contacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContactsData);
  const lastId = useAppSelector(lastContactId);
  const [open, setOpen] = useState(false);
  const [contactIdtoWorkWith, setContactIdtoWorkWith] = useState<Contact['id']>();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = (id: Contact['id'] | undefined) => {
    setContactIdtoWorkWith(id);
    handleOpen();
  };

  const handleDelete = (id: Contact['id']) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const emptyContact: Contact = {
    id: lastId + 1,
    name: '',
    email: '',
    phone: '',
  };
  console.log(lastId);
  return (
    <div className={styles.contacts}>
      <Modal isOpen={open} onClose={handleClose}>
        <ContactModifyForm
          onClose={handleClose}
          data={contacts.filter(item => item.id == contactIdtoWorkWith)[0] || emptyContact}
        />
      </Modal>
      <Header />
      <Container maxWidth="sm" sx={{height: '100%'}}>
        <div className={styles.wrapper}>
          <div className={styles.searchField}>
            <SearchField />
          </div>

          <div className={styles.contactList}>
            <div className={styles.buttonWrapper}>
              <AddButton onClick={() => handleEdit(undefined)} />
            </div>
            <ContactList>
              {contacts.map(contact => {
                return (
                  <ContactCard
                    key={contact.id}
                    data={contact}
                    onEdit={() => handleEdit(contact.id)}
                    onDelete={() => handleDelete(contact.id)}
                  />
                );
              })}
            </ContactList>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
