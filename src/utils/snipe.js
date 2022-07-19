import { getCollectionAttr, getNftsByQuery, setPriceFilter, setRefreshInterval, setSelectedAttrs, setSnipeCollection } from "../redux/snipeSlice"
import store from "../redux/store"


//Actions

export const handleSnipeCollection = symbol => {
  store.dispatch(setSnipeCollection(symbol))
}


export const setPrice = (value) => {
  store.dispatch(setPriceFilter(value))
}

export const setRefresh = (value) => {
  store.dispatch(setRefreshInterval(value))
}

export const fetchCollectionAttr = (symbol) => {
  store.dispatch(getCollectionAttr(symbol))
}

export const addSelectedAttr = ({trait,values}) => {
  store.dispatch(setSelectedAttrs({trait_type:trait,attributes:values}))
}

export const fetchNftsByQuery = () => {
  store.dispatch(getNftsByQuery())
}