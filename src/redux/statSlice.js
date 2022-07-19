import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatService from "../services/statService";

const service = new StatService()

const initialState = {
    collections:[],
    statistics:[],
    selected:{},
    loading:"idle",
    error:false

}

export const getStats = createAsyncThunk("stats/getStats", async (_,thunkAPI) => {
  const state = thunkAPI.getState()
  return await service.getCollectionStats(state.stats.collections)
  })

export const getEscrowStats = createAsyncThunk("stats/getEscrowStats", async (symbol) => {
  return await service.getCollectionStats(symbol)
  })

const statSlice = createSlice({
    name:"stats",
    initialState,
    reducers:{
        setCollections : (state,action) => {
            state.collections = action.payload
        } 

    },
    extraReducers:{
        [getStats.pending]: (state,action) => {
            state.loading = true
          },
      
          [getStats.rejected]: (state,action) => {
            state.loading = false
            state.error = action.payload.error
          },
      
          [getStats.fulfilled]: (state,action) => {
            state.loading = false
            state.statistics = action.payload?.results ?? []
          },
    },

})

//actions 
export const {setCollections} = statSlice.actions


export default statSlice.reducer