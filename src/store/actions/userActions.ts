import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData} from '../../types';

export const login = createAsyncThunk('user/login', async (data: AuthData) => {
  try {
    const {login, password} = data;
    //fetchUserDataFunction(login,password)
    return {email: login, name: 'Admin', id: 1};
  } catch (e) {
    return e.value;
  }
});
