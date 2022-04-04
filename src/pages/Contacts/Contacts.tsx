import React, {useEffect, useState} from 'react';
import styles from './contacts.module.scss';
import Container from '@mui/material/Container';
import ContactList from '../../components/ContactList';
import SearchField from '../../components/SearchField';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {selectContactsData} from '../../store/reducers/contactsSlice';
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
  const [open, setOpen] = useState(false);
  const [contactIdtoWorkWith, setContactIdtoWorkWith] = useState<number>();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModify = (id: Contact['id'] | undefined) => {
    setContactIdtoWorkWith(id);
    handleOpen();
  };
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={styles.contacts}>
      <Modal isOpen={open} onClose={handleClose}>
        <ContactModifyForm
          onClose={handleClose}
          data={undefined || contacts.filter(item => item.id == contactIdtoWorkWith)[0]}
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
              <AddButton onClick={() => handleModify(undefined)} />
            </div>
            <ContactList>
              {contacts.map(contact => {
                return (
                  <ContactCard
                    key={contact.id}
                    data={contact}
                    onClick={() => handleModify(contact.id)}
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
