import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryId: 0,
  pageCount: 1,
   sort: {
      name: "Popular",
      sortType: "rating",
    },
  }


const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state,action) {
      state.sort= action.payload;
    },
    setPageCount(state, action) {
   state.pageCount = action.payload
    }

  },
});



export const {setCategoryID, setSort, setPageCount} = filterSlice.actions
export default filterSlice.reducer;    