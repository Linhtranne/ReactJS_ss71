import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isExpanded: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
