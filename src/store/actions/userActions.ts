import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData, User} from '../../types';

export const login = createAsyncThunk('user/login', async (data: AuthData) => {
  try {
    const {login} = data;
    const userData: User = {login, name: 'Admin', id: 1};
    return userData;
  } catch (e) {
    return e.value;
  }
});
