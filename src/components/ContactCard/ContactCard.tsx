import React, {Fragment} from 'react';
import styles from './contactCard.module.scss';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {Contact} from '../../types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface ContactCardProps {
  data: Contact;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({data, onEdit, onDelete}) => {
  return (
    <div className={styles.contactCard}>
      <ListItem button>
        <ListItemAvatar onClick={onEdit}>
          <Avatar alt="Profile Picture" />
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={data.email} onClick={onEdit} />
        <Fragment>
          <IconButton edge="start" onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Fragment>
      </ListItem>
    </div>
  );
};

export default React.memo(ContactCard);
