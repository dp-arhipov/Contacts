import React, {Fragment} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from './store/reducers/userSlice';

const RequireAuth: React.FC = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);
  return <Fragment>{isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />}</Fragment>;
};

export default RequireAuth;
