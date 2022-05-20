/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
import { createSlice } from '@reduxjs/toolkit';

const csvSlice = createSlice({
  name: 'csv',
  initialState: { data: [] },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },

    cleanData: (state) => {
      state.data.splice(0);
    },

    editData: (state, action) => {
      const { id, date, description, amount, code } = action.payload;
      const existingData = state.data.find((data) => data.id === id);
      if (existingData) {
        existingData.date = date;
        existingData.description = description;
        existingData.amount = amount;
        existingData.code = code;
      }
    },
    deleteData: (state, action) => {
      const { id } = action.payload;
      const existingDat = state.data.find((data) => data.id === id);
      if (existingDat) {
        return state.filter((e) => e.id !== id);
      }
    },
  },
});

export const { addData, cleanData, editData, deleteData } = csvSlice.actions;
export default csvSlice.reducer;
