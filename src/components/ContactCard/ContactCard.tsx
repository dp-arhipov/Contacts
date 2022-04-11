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
import Typography from '@mui/material/Typography';
interface ContactCardProps {
  data: Contact;
  onEdit: () => void;
  onDelete: () => void;
}

function colorAvatar(id: number) {
  if (id) {
    const sx = {
      bgcolor: `hsla(${(id / 10) * 360}, 100%, 40%, 1)`,
    };
    return {sx};
  }
}

const ContactCard: React.FC<ContactCardProps> = ({data, onEdit, onDelete}) => {
  return (
    <div className={styles.contactCard}>
      <ListItem button>
        <ListItemAvatar onClick={onEdit}>
          <Avatar alt="Profile Picture" {...colorAvatar(data.id)} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'text.primary',
              }}
            >
              {data.name}
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'text.secondary',
              }}
            >
              {data.email}
            </Typography>
          }
          onClick={onEdit}
        />
        <Fragment>
          <IconButton edge="start" onClick={onEdit} sx={{pl: '2rem'}}>
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
