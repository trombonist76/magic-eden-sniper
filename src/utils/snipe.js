import { getCollections } from "../redux/collectionSlice"
import { getCollectionAttr, getNftsByQuery, setPriceFilter, setRefreshInterval, setSelectedAttrs, setSnipeCollection } from "../redux/snipeSlice"
import store from "../redux/store"


//Actions

export const handleSnipeCollection = symbol => {
  store.dispatch(setSnipeCollection(symbol))
}

export const fetchCollections = () => {
  store.dispatch(getCollections())
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


//Selectors

//collections

export const newCollections = () => {
  const state = store.getState()
  return state.collections.collections
}

export const collectionsLoading = () => {
  const state = store.getState()
  return state.collections.loading
}

export const collectionsError = () => {
  const state = store.getState()
  return  state.collections.error
}
 
//snipe

export const snipeCollection = () => {
  const state = store.getState()
  return state.snipe.collection
}

export const snipeAttributes = () => {
  const state = store.getState()
  return state.snipe.attributes
}

export const selectedSnipeAttrs = () => {
  const state = store.getState()
  return state.snipe.selectedAttributes
}

export const snipeQuery = () => {
  const state = store.getState()
  return state.snipe.query
}

export const snipeNfts = () => {
  const state = store.getState()
  return state.snipe.nfts
}

export const priceFilter = () => {
  const state = store.getState()
  return state.snipe.priceFilter
}

export const refreshInterval = () => {
  const state = store.getState()
  return state.snipe.refreshInterval
}

