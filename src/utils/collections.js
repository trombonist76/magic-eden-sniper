import { getCollections } from "../redux/collectionSlice"
import store from "../redux/store"


export const fetchCollections = () => {
  store.dispatch(getCollections())
}
