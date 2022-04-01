import React, {Fragment} from 'react';
import {Navigate, Outlet, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {isUserLoggedIn} from './store/reducers/userSlice';

const RequireAuth: React.FC = () => {
  const isUserLoggedIn_: boolean = useSelector(isUserLoggedIn);
  return <Fragment>{isUserLoggedIn_ ? <Outlet /> : <Navigate to={'/login'} />}</Fragment>;
};

export default RequireAuth;
