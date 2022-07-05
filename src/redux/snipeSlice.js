import { createSlice } from "@reduxjs/toolkit";

const snipeSlice = createSlice({
  name:"snipe",
  initialState:{
    collection:"",

  },
  reducers:{
    setSnipeCollection : (state,action) => {
      state.collection = action.payload
    }
  },
})

//actions
export const {setSnipeCollection} = snipeSlice.actions

//selectors
export const snipeCollectionSelector = state => state.snipe.collection


export default snipeSlice.reducer