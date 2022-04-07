import {createAsyncThunk} from '@reduxjs/toolkit';
import {Contact} from '../../types';
export const getContacts = createAsyncThunk('contacts/getAll', async () => {
  try {
    const response = await fetch('https://624d6c5ed71863d7a8179557.mockapi.io/contacts');

    return response.json();
  } catch (e) {
    return e.value;
  }
});
