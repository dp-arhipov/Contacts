// eslint-disable-next-line import/named
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../../types';
import {getContacts} from '../actions/contactsActions';
import {RootState} from '../index';
interface initialStateType {
  isLoading: boolean;
  error: string;
  data: Contact[];
}

const initialState: initialStateType = {
  isLoading: false,
  error: '',
  data: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action: PayloadAction<Contact[]>) {
      state.data = [...action.payload, ...state.data];
    },
    // updateContact(state, action: PayloadAction<Contact>) {
    //   state.data.filter(item=>item.id == action.payload.id )
    //   state.data = [...action.payload, ...state.data];
    // },
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

export const {addContacts} = contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContactsData = (state: RootState) => state.contacts.data;

export default contactsSlice.reducer;
