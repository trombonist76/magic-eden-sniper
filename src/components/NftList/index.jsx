import React, { useEffect } from 'react'
import Nft from './Nft'
import { fetchNftsByQuery} from '../../utils/snipe'
import { useSelector } from 'react-redux'

export default function NftList() {
  const {query} = useSelector(state=>state.snipe)
  const {priceFilter} = useSelector(state=>state.snipe)
  const refreshInterval = useSelector(state=>state.snipe.refreshInterval) * 1000
  const {items,loading,error} = useSelector(state=>state.snipe.nfts)
  const filteredItems = items.filter(item=> priceFilter ? priceFilter >= item.price : item)

  console.log(refreshInterval)
  useEffect(()=>{
    let interval
    if(query){
      interval = setInterval(()=>(
        fetchNftsByQuery()
      ),refreshInterval)
    }

    return () => {
      clearInterval(interval)
    }
  },[query, refreshInterval])
  
  return (
    <div className='nftList'>{filteredItems.map((item,index)=>(
      <Nft item={item} key={index}/>
    ))}</div>
  )
}

