import { createSlice } from '@reduxjs/toolkit'
const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    value:[]
  },
  reducers: {
    searching:(state,{payload})=>{
state.value = payload
    }
  }
})


export const {searching} =SearchSlice.actions;
export default SearchSlice.reducer;
