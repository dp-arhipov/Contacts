// eslint-disable-next-line import/named
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../../types';
import {RootState} from '../index';
interface initialStateType {
  data: Contact[];
}

const initialState: initialStateType = {
  data: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action: PayloadAction<Contact[]>) {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export const {addContacts} = contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContactsData = (state: RootState) => state.contacts.data;

export default contactsSlice.reducer;
