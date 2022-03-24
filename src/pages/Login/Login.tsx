import React, {Fragment} from 'react';
import styles from './login.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginForm from '../../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
