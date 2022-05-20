/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
import { createSlice } from '@reduxjs/toolkit';

const importSlice = createSlice({
  name: 'import',
  initialState: { data: {} },
  reducers: {
    addImp: (state, action) => {
      state.push(action.payload);
    },

    cleanImp: (state) => {
      state.splice(0);
    },

    editImp: (state, action) => {
      const { id, date, description, amount, code } = action.payload;
      const existingData = state.find((data) => data);
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
      const existingDat = state.find((data) => data);
      const mapped = existingDat.find((b) => b.id === id);
      //   const reduced = state.map((e) => e.filter((b) => b));
      //   console.log(reduced);
      console.log();

      console.log(mapped);
      if (mapped) {
        return state.map((e) => e.filter((b) => b.id !== id));
      }
      // eslint-disable-next-line no-constant-condition
      //   if (reduced[0].length < 1) {
      //     return state.splice(0);
      //   }
    },
  },
});

export const { addImp, cleanImp, editImp, deleteImp } = importSlice.actions;
export default importSlice.reducer;
