import React from 'react';
import styles from './login.module.scss';
import LoginForm from '../../components/LoginForm';
import CenterXY from '../../components/CenterXY';

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <CenterXY>
        <LoginForm />
      </CenterXY>
    </div>
  );
};

export default Login;
