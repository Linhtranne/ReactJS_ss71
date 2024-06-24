import { createSlice } from '@reduxjs/toolkit';

export const randomNumber = createSlice({
  name: 'randomNumber',
  initialState: { list: [] },
  reducers: {
    generateRandomNumber: state => {
      state.list.push(Math.floor(Math.random() * 100));
    },
  }
});

export const { generateRandomNumber } = randomNumber.actions;
export default randomNumber.reducer;
