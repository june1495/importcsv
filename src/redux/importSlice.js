/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
import { createSlice } from '@reduxjs/toolkit';

const importSlice = createSlice({
  name: 'import',
  initialState: { data: [] },
  reducers: {
    addImp: (state, action) => {
      state.data.push(action.payload);
    },
    addOne: (state, action) => {
      state.data[0].push(action.payload);
    },
    cleanImp: (state) => {
      state.data = [];
    },

    editImp: (state, action) => {
      const { id, date, description, amount, code } = action.payload;
      const existingData = state.data.find((data) => data);
      const mapped = existingData.find((b) => b.id === id);

      if (mapped) {
        mapped.date = date;
        mapped.description = description;
        mapped.amount = amount;
        mapped.code = code;
      }
    },
    deleteImp: (state, action) => {
      const { id } = action.payload;

      state.data = state.data.map((e) => e.filter((b) => b.id !== id));
    },
  },
});

export const { addImp, cleanImp, editImp, deleteImp, addOne } =
  importSlice.actions;
export default importSlice.reducer;
