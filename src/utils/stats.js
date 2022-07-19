import { getStats, setCollections } from "../redux/statSlice"
import store from "../redux/store"


//Actions

export const handleStatCollections = collections => {
  store.dispatch(setCollections(collections))
}


export const fetchStats = () => {
  store.dispatch(getStats())
}