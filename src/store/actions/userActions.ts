import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData} from '../../types';

async function serverLogin(login: string, password: string) {
  return new Promise(function (resolve, reject) {
    const testUser = {
      id: 1,
      login: 'admin',
      password: 'admin',
      name: 'Admin user',
    };
    if (login == testUser.login && password == testUser.password) {
      setTimeout(() => resolve(testUser), 300);
    } else {
      setTimeout(() => reject(new Error('NOT_CORRECT_AUTH_DATA')), 300);
    }
  });
}

export const login = createAsyncThunk('user/login', async (data: AuthData, {rejectWithValue}) => {
  try {
    const responce = await serverLogin(data.login, data.password);
    return responce;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
