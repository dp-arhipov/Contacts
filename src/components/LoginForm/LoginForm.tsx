import React, {Fragment} from 'react';
import styles from './loginForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.loginForm}>
      <TextField label="Логин" variant="outlined" />
      <TextField label="Пароль" variant="outlined" />
      <Button className={styles.button} variant="contained" size="large">
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
