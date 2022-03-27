import React, {Fragment} from 'react';
import styles from './loginForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginForm: React.FC = () => {
  const login = () => {
    console.log('submit');
  };

  return (
    <div className={styles.loginForm}>
      <form className={styles.form} onSubmit={login}>
        <TextField label="Логин" variant="outlined" />
        <TextField label="Пароль" variant="outlined" />
        <Button className={styles.button} variant="contained" size="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
