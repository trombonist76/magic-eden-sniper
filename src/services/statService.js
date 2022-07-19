import axios from "axios"

export default class StatService {

  DIVIDE_PERCENT = 1000000000

  async getCollectionStats(collections){
    const symbols = collections.map(c=>c.symbol).join(",")
    const url = `${process.env.REACT_APP_OLD_ENDPOINT}/rpc/getAggregatedCollectionMetricsBySymbol?edge_cache=true&symbols=${symbols}`
    const {data} = await axios(url)
    return data
  }

  async getCollectionEscrowStats(symbol){
    const url = `${process.env.REACT_APP_OLD_ENDPOINT}/rpc/getCollectionEscrowStats/${symbol}?edge_cache=true`
    const {data} = await axios(url)
    return data.results
  }

  escrowObject(){
    const escrowObj = {
      floorPrice:{
        placeholder:"Floor",
        isPrice:true
      },
      listedCount:{
        placeholder:"Listed",
        isPrice:false
      },
      avgPrice24hr:{
        placeholder:"Average Price (24H)",
        isPrice:true
      },
      volume24hr:{
        placeholder:"Volume (24H)",
        isPrice:true
      }
    }
    return escrowObj
  }

  chartObj(obj){
    const data = obj.floorPrice
    const result = [
      {
        name: "Daily",
        current: data.value1d,
        previous: data.prev1d,
      },
      {
        name: "Hourly",
        current: data.value1h,
        previous: data.prev1h,
      },
      {
        name: "Weekly",
        current: data.value7d,
        previous: data.prev7d,
      },
      {
        name: "Monthly",
        current: data.value30d,
        previous: data.prev30d,
      },
    ]

    return result

  }

}
