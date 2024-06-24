import { createSlice } from '@reduxjs/toolkit';

export const displayMode= createSlice({
  name: 'displayMode',
  initialState: { mode: 'list' },
  reducers: {
    toggleDisplayMode: (state) => {
      state.mode = state.mode === 'list' ? 'grid' : 'list';
    },
  }
});

export const { toggleDisplayMode } = displayMode.actions;
export default displayMode.reducer;
