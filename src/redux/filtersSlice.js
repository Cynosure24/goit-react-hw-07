import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changefilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changefilter } = filtersSlice.actions;
