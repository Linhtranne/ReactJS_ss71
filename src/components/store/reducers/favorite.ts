import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [
    { id: 1, name: "Account 1", favorite: true },
    { id: 2, name: "Account 2", favorite: false },
  ],
};

const favoriteSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const account = state.accounts.find(acc => acc.id === action.payload);
      if (account) {
        account.favorite = !account.favorite;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
