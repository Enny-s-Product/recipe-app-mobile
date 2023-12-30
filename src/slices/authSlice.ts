import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUserDetails} from '../types';
import {storeSensitiveInfo} from '../utils/sensitiveInfo.util';
import {STORE_KEYS} from '../configs/store.config';

export interface IAuthInitialState {
  userDetails: IUserDetails | null;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: IAuthInitialState = {
  userDetails: null,
  isLoading: false,
  errorMessage: null,
};

export const saveUserDetails = createAsyncThunk(
  'authSlice/saveUserDetails',
  async (data: IUserDetails) => {
    try {
      await storeSensitiveInfo<IUserDetails>({
        key: STORE_KEYS.USER_DETAILS,
        data,
      });
      return data;
    } catch (error) {}
  },
);

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearErrors: state => {
      state.errorMessage = null;
    },
  },
  extraReducers: builder => {
    // reducers for handling saving user's details;
    builder.addCase(saveUserDetails.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(saveUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload ?? ({} as IUserDetails);
    });
    builder.addCase(saveUserDetails.rejected, state => {
      state.isLoading = false;
      state.errorMessage = 'Error occured saving user details';
    });
  },
});

export const {clearErrors} = authSlice.actions;

export default authSlice.reducer;
