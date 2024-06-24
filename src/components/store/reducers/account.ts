import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [
    { id: 1, userName: 'user1', email: 'user1@example.com', password: 'password1' },
    { id: 2, userName: 'user2', email: 'user2@example.com', password: 'password2' },
  ],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { userName, password } = action.payload;
      const user = state.users.find(user => user.userName === userName && user.password === password);
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
