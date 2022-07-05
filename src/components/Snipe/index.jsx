import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { collectionsSelector, getCollections } from '../../redux/collectionSlice'
import { useDispatch } from 'react-redux/'
import { setSnipeCollection } from '../../redux/snipeSlice'

export default function Snipe() {
  const collections = useSelector(state=>collectionsSelector(state))
  const dispatch = useDispatch()
  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(setSnipeCollection(e.target.value))
  }
  useEffect(()=>{
    dispatch(getCollections())
  },[])

  return (
    <div className="snipe">
      <select onChange={handleChange}>
        {
          collections.map((collection,index)=>(
            <option key={index} value={collection.symbol}>{collection.name}</option>
          ))
        }
      </select>
    </div>
  )
}
