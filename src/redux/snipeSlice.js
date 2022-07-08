import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SnipeService from "../services/snipeService";

const service = new SnipeService()

export const getCollectionAttr = createAsyncThunk("snipe/getCollectionAttr",async (symbol) => {
  return await service.getAttrByCollection(symbol)
  
})

export const getNftsByQuery = createAsyncThunk("snipe/getNftsByQuery",async (_,thunkAPI) => {
  const state = thunkAPI.getState()
  const {query} = state.snipe
  return await service.getNftsFromQuery(query)
})

const snipeSlice = createSlice({
  name:"snipe",
  initialState:{
    collection:"",
    attributes:[],
    selectedAttributes:{},
    query:"",
    loading: "idle",
    error: false,
    nfts:{
      items:[],
      loading: "idle",
      error: false
    }

  },
  reducers:{
    setSnipeCollection : (state,action) => {
      state.collection = action.payload
    },
    setSelectedAttrs: (state,action) => {
      const {trait_type,attributes} = action.payload
      state.selectedAttributes[trait_type] = attributes
      const query = service.createQuery(state.selectedAttributes,state.collection)
      state.query = query
    }


  },
  extraReducers:{
    [getCollectionAttr.pending]: (state,action) => {
      state.loading = true
    },

    [getCollectionAttr.rejected]: (state,action) => {
      state.loading = false
      state.error = action.payload.error
    },

    [getCollectionAttr.fulfilled]: (state,action) => {
      state.loading = false
      const availableAttributes = action.payload.results.availableAttributes
      const arrangedAttr = service.arrangeAttr(availableAttributes)
      state.attributes = arrangedAttr
    },

    [getNftsByQuery.pending]: (state,action) => {
      state.nfts.loading = true
    },

    [getNftsByQuery.rejected]: (state,action) => {
      state.nfts.loading = false
      console.log(action)
      state.nfts.error = action.payload
    },

    [getNftsByQuery.fulfilled]: (state,action) => {
      state.nfts.loading = false
      const nfts = action.payload.results
      state.nfts.items = nfts
    }
  }
})

//actions
export const {setSnipeCollection, setSelectedAttrs} = snipeSlice.actions

//selectors
export const snipeCollectionSelector = state => state.snipe.collection
export const attributesSelector = state => state.snipe.attributes
export const selectedAttrsSelector = state => state.snipe.selectedAttributes
export const querySelector = state => state.snipe.query
export const nftsSelector = state => state.snipe.nfts



export default snipeSlice.reducer