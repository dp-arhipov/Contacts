import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData} from '../../store/reducers/userSlice';
// eslint-disable-next-line import/no-unresolved
import styles from './auth.module.scss';
// import {login} from '../store/actions/userActions';

import CircularProgress from '@mui/material/CircularProgress';

const Auth: React.FC = ({children}) => {
  const userId: number = useSelector(selectUserData).id;

  if (!userId)
    return (
      <div className={styles.centerXY}>
        <CircularProgress />
      </div>
    );

  return <Fragment>{children}</Fragment>;
};
export default Auth;
