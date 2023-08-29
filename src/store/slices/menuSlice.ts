import { createSlice } from '@reduxjs/toolkit';

interface IMenuState {
  isOpen: boolean;
}

const initialState: IMenuState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    setMenuState(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setMenuState } = menuSlice.actions;
export default menuSlice.reducer;
