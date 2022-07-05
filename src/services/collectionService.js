import axios from "axios"

export default class CollectionService {
  
  //Fetch new collections from magic-eden
  async getCollections(){
    // const url = `${process.env.REACT_APP_OLD_ENDPOINT}/all_collections`
    const url = `${process.env.REACT_APP_OLD_ENDPOINT}/new_collections?more=true&edge_cache=true`
    const {data} = await axios(url)
    return data
  }
}