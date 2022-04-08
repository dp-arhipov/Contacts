import React, {useEffect, useState} from 'react';
import styles from './contacts.module.scss';
import Container from '@mui/material/Container';
import ContactList from '../../components/ContactList';
import SearchField from '../../components/SearchField';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {
  deleteContact,
  lastContactId,
  searchString,
  selectContactsData,
} from '../../store/reducers/contactsSlice';
import {getContacts} from '../../store/actions/contactsActions';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal';
import ContactModifyForm from '../../components/ContactModifyForm';
import ContactCard from '../../components/ContactCard';
import {Contact} from '../../types';

const Contacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContactsData);
  const lastId = useAppSelector(lastContactId);
  const searchStr = useAppSelector(searchString);
  const contactsData = useAppSelector(selectContactsData);
  const [open, setOpen] = useState(false);
  const [contactIdtoWorkWith, setContactIdtoWorkWith] = useState<Contact['id']>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = (id?: Contact['id']) => {
    setContactIdtoWorkWith(id);
    handleOpen();
  };
  const filteredContacts = (contacts: Contact[], searchString: string) => {
    if (searchString.length > 0) {
      const foundContacts: Contact[] = [];
      contacts.map(contact => {
        const values = Object.values(contact);
        for (const value of values) {
          if (
            typeof value == 'string' &&
            value.toLowerCase().includes(searchString.toLowerCase().trim())
          ) {
            foundContacts.push(contact);
            break;
          }
        }
      });
      return foundContacts;
    } else return contacts;
  };

  const handleDelete = (id: Contact['id']) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    if (contactsData.length == 0) {
      dispatch(getContacts());
    }
  }, [dispatch]);

  const emptyContact: Contact = {
    id: lastId + 1,
    name: '',
  };
  return (
    <div className={styles.contacts}>
      <Modal isOpen={open} onClose={handleClose}>
        <ContactModifyForm
          onClose={handleClose}
          data={contacts.filter((item: any) => item.id == contactIdtoWorkWith)[0] || emptyContact}
        />
      </Modal>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <Container maxWidth="sm" sx={{height: '100%'}}>
          <div className={styles.wrapper}>
            <div className={styles.searchField}>
              <SearchField onAdd={() => handleEdit()} />
            </div>

            <div className={styles.contactList}>
              <ContactList>
                {filteredContacts(contacts, searchStr).map(contact => {
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
    </div>
  );
};

export default Contacts;
