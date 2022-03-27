import React from 'react';
import styles from './contactCard.module.scss';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

type ContactCardProps = {
  phone: string;
  email: string;
  name: string;
};

const ContactCard: React.FC<ContactCardProps> = ({name, phone, email}) => {
  return (
    <div className={styles.contactCard}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={email} />
      </ListItem>
    </div>
  );
};

export default ContactCard;
