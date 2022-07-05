import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./collectionSlice";
import snipeSlice from "./snipeSlice";



const store = configureStore({
  reducer:{
    collections:collectionSlice,
    snipe:snipeSlice
  }
})


export default store