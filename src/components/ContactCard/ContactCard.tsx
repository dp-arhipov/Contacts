import React from 'react';
import styles from './contactCard.module.scss';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {Contact} from '../../types';

interface ContactCardProps {
  data: Contact;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({data, onClick}) => {
  return (
    <div className={styles.contactCard}>
      <ListItem button onClick={onClick}>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" />
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={data.email} />
      </ListItem>
    </div>
  );
};

export default React.memo(ContactCard);
