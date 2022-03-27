import {createAsyncThunk} from '@reduxjs/toolkit';
import {Contact} from '../../types';
export const getContacts = createAsyncThunk('contacts/getAll', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response.json();
  } catch (e) {
    return e.value;
  }
});
