import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./collectionSlice";
import snipeSlice from "./snipeSlice";
import statSlice from "./statSlice";



const store = configureStore({
  reducer:{
    collections:collectionSlice,
    snipe:snipeSlice,
    stats:statSlice
  }
})


export default store