import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryId: 0,
   sort: {
    name: {
      name: "Popular",
      sortType: "rating",
    },
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const {setCategoryID} = filterSlice.actions
export default filterSlice.reducer;    