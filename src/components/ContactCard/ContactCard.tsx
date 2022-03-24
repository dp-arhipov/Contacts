import React from 'react';
import styles from './contactCard.module.scss';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {Contact} from '../../types';

type ContactCardProps = Contact;

const ContactCard: React.FC<ContactCardProps> = ({name, phoneNumber}) => {
  return (
    <div className={styles.contactCard}>
      <ListItem button key={phoneNumber}>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={phoneNumber} />
      </ListItem>
    </div>
  );
};

export default ContactCard;
