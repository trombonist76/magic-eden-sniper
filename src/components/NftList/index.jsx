import React, { useEffect } from 'react'
import Nft from './Nft'
import { fetchNftsByQuery, priceFilter, refreshInterval, snipeNfts, snipeQuery } from '../../utils/snipe'

export default function NftList() {
  const query = snipeQuery()
  const price = priceFilter()
  const refresh = refreshInterval() * 1000
  const {items,loading,error} = snipeNfts()
  const filteredItems = items.filter(item=> price ? price >= item.price : item)

  useEffect(()=>{
    let interval
    if(query){
      interval = setInterval(()=>(
        fetchNftsByQuery()
      ),refresh)
    }

    return () => {
      clearInterval(interval)
    }
  },[query, refresh])
  
  return (
    <div className='nftList'>{filteredItems.map((item,index)=>(
      <Nft item={item} key={index}/>
    ))}</div>
  )
}

