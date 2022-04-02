import {useEffect, useState} from 'react';
import {setUser, logout as logOut} from '../store/reducers/userSlice';
import {login as logIn} from '../store/actions/userActions';
import {AuthData} from '../types';
import {useAppDispatch} from './redux';

function useAuth() {
  const [isLocalCheckFinished, setIsLocalCheckFinished] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
    setIsLocalCheckFinished(true);
  }, [dispatch]);

  const login = async (loginData: AuthData) => {
    const user = await dispatch(logIn(loginData));
    window.localStorage.setItem('user', JSON.stringify(user.payload));
  };

  const logout = () => {
    dispatch(logOut());
    window.localStorage.removeItem('user');
  };

  return {isLocalCheckFinished, logout, login};
}

export default useAuth;
