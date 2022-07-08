import axios from "axios"

export default class SnipeService {
  
  async getAttrByCollection(symbol){
    const url = `${process.env.REACT_APP_OLD_ENDPOINT}/rpc/getCollectionEscrowStats/${symbol}`
    const {data} = await axios(url)
    return data
  }

  async getNftsFromQuery(query){
    const url = `${process.env.REACT_APP_OLD_ENDPOINT}rpc/getListedNFTsByQueryLite?q=${query}`
    console.log(url)
    const {data} = await axios(url)
    return data
  }

  arrangeAttr(availableAttr){
    const result = availableAttr.reduce((acc,cur)=>{
      const trait_type = cur.attribute["trait_type"]

      if (!acc.hasOwnProperty(trait_type)){
        acc[trait_type] = []
      }
      acc[trait_type].push(cur)

      return acc

    },{})

    return result
  }

  createQuery(selectedAttributes, symbol, page=0) {
    const and = "$and"
    const match = "$match"
    const queryObj = this.getBlankQueryObj(symbol,page)
    queryObj[match][and] = []
    for (const [key, values] of Object.entries(selectedAttributes)) {
      const traitAttrs = values.map((val) => this.getTraitObj(val.attribute))
      const orObj = {"$or":traitAttrs}
      queryObj[match][and].push(orObj)
    }

    return JSON.stringify(queryObj)
  }

  getBlankQueryObj(symbol,page,limit=20){
    return { "$match": { "collectionSymbol": symbol }, "$sort": { "takerAmount": 1 }, "$skip": page, "$limit": limit }
  }

  getTraitObj({trait_type,value}){
    const secondObj = {
      "attributes": {
        "$elemMatch": {
          "trait_type": trait_type,
          "value": value
        }
      }
    }
    return secondObj
  }
}