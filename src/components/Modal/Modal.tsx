import React from 'react';
import Modal from '@mui/material/Modal';
import styles from './modal.module.scss';
import Box from '@mui/material/Box';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({isOpen, onClose, children}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className={styles.modal}>{children}</div>
    </Modal>
  );
};

export default AppModal;
