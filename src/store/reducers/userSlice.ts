// eslint-disable-next-line import/named
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types';
import {login} from '../actions/userActions';
import {RootState} from '../index';
interface initialStateType {
  isLoading: boolean;
  error: string;
  name: string;
  id: number;
}

const initialState: initialStateType = {
  isLoading: false,
  error: '',
  name: '',
  id: NaN,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setParms(state, payload) {
    //   const {name, id} = payload;
    //   if (name) state.name = name;
    //   if (id) state.id = id;
    // },
    logout(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.error = '';
      const {name, id} = action.payload;
      state.name = name;
      state.id = id;
    },
    [login.pending.type]: state => {
      state.isLoading = true;
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) => state.user;
export const isUserLoggedIn = (state: RootState) => (state.user.id ? true : false);

export default userSlice.reducer;
