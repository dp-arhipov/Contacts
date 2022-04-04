import React from 'react';
import styles from './addButton.module.scss';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface AddButtonProps {
  onClick: () => void;
}
const AddButton: React.FC<AddButtonProps> = ({onClick}) => {
  return (
    <IconButton size="large" color="primary" onClick={onClick}>
      <AddCircleIcon fontSize="large" />
    </IconButton>
  );
};

export default AddButton;
