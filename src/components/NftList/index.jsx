import React, { useEffect } from 'react'
import { getNftsByQuery, nftsSelector, querySelector, priceFilterSelector, refreshIntervalSelector } from '../../redux/snipeSlice'
import { useDispatch, useSelector } from 'react-redux'
import Nft from './Nft'

export default function NftList() {
  const query = useSelector(state=>querySelector(state))
  const price = useSelector((state) => priceFilterSelector(state))
  const refresh = useSelector((state) => refreshIntervalSelector(state)) * 1000
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector(state=>nftsSelector(state))
  const filteredItems = items.filter(item=> price ? price >= item.price : item)

  useEffect(()=>{
    let interval
    if(query){
      interval = setInterval(()=>(
        dispatch(getNftsByQuery())
      ),refresh)
    }

    return () => {
      clearInterval(interval)
    }
  },[query, dispatch, refresh])
  
  return (
    <div className='nftList'>{filteredItems.map((item,index)=>(
      <Nft item={item} key={index}/>
    ))}</div>
  )
}

