import {createAsyncThunk} from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async (login, password) => {
  try {
    //fetchUserDataFunction(login,password)
    return {email: login, name: 'Admin', id: 1};
  } catch (e) {
    return e.value;
  }
});
