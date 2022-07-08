import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CollectionService from "../services/collectionService";

export const getCollections = createAsyncThunk("collections/getCollections", async () => {
  const service = new CollectionService()
  const data = await service.getCollections()
  return data
})


const collectionSlice = createSlice({
  name:"collections",
  initialState:{
    loading: "idle",
    error:false,
    collections:[],
  },
  reducers:{

  },
  extraReducers:{
    [getCollections.pending]: (state,action) => {
      state.loading = true
    },

    [getCollections.rejected]: (state,action) => {
      state.loading = false
      state.error = action.payload.error
    },

    [getCollections.fulfilled]: (state,action) => {
      state.loading = false
      state.collections = action.payload.collections
    }
  }
})


export const loadingSelector = (state) => state.collections.loading
export const errorSelector = (state) => state.collections.error
export const collectionsSelector = (state) => state.collections.collections
export default collectionSlice.reducer