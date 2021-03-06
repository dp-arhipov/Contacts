// eslint-disable-next-line import/named
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../../types';
import {getContacts} from '../actions/contactsActions';
import {RootState} from '../index';
interface initialStateType {
  isLoading: boolean;
  error: string;
  data: Contact[];
  searchString: string;
}

const findIndexById = (array: Contact[], id: number): number => {
  return array.findIndex((item: Contact) => item.id == id);
};

const initialState: initialStateType = {
  isLoading: false,
  error: '',
  data: [],
  searchString: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action: PayloadAction<Contact[]>) {
      state.data = [...action.payload, ...state.data];
    },
    updateContact(state, action: PayloadAction<Contact>) {
      console.log(action.payload);
      const changeIndex = findIndexById(state.data, action.payload.id);
      state.data[changeIndex] = action.payload;
    },
    deleteContact(state, action: PayloadAction<Contact['id']>) {
      const deleteIndex = findIndexById(state.data, action.payload);
      state.data.splice(deleteIndex, 1);
    },
    setSearchString(state, action) {
      state.searchString = action.payload;
    },
    cleanAll() {
      return {...initialState};
    },
  },
  extraReducers: {
    [getContacts.fulfilled.type]: (state, action: PayloadAction<Contact[]>) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [getContacts.pending.type]: state => {
      state.isLoading = true;
    },
    [getContacts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {addContacts, updateContact, deleteContact, setSearchString, cleanAll} =
  contactsSlice.actions;
export const selectContactsData = (state: RootState) => state.contacts.data;
export const searchString = (state: RootState) => state.contacts.searchString;
export const lastContactId = (state: RootState) =>
  state.contacts.data.reduce(
    (maxId: number, item: Contact) => (item.id > maxId ? (maxId = item.id) : maxId),
    0
  );

export default contactsSlice.reducer;
