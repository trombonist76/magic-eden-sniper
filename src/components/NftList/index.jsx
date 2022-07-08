import React, { useEffect } from 'react'
import { getNftsByQuery, nftsSelector, querySelector } from '../../redux/snipeSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function NftList() {
  const query = useSelector(state=>querySelector(state))
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector(state=>nftsSelector(state))
  useEffect(()=>{
    if(query){
      dispatch(getNftsByQuery())
    }

  },[dispatch,query])
  
  return (
    <div>{JSON.stringify(items)}</div>
  )
}
