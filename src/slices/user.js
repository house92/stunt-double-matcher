import { createSlice } from '@reduxjs/toolkit';

import users from '../data/users.json';

const userSlice = createSlice({
  name: 'user',
  initialState: users[0],
  reducers: {
    updateUser: (state, action) => ({ ...state, user: action.payload.user }),
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice;
