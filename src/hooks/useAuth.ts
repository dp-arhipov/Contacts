import {cleanAll as cleanUser} from '../store/reducers/userSlice';
import {cleanAll as cleanContacts} from '../store/reducers/contactsSlice';

import {login as logIn} from '../store/actions/userActions';
import {AuthData} from '../types';
import {useAppDispatch} from './redux';

function useAuth() {
  const dispatch = useAppDispatch();

  const login = async (loginData: AuthData) => {
    await dispatch(logIn(loginData));
  };

  const logout = () => {
    dispatch(cleanUser());
    dispatch(cleanContacts());
  };

  return {logout, login};
}

export default useAuth;
