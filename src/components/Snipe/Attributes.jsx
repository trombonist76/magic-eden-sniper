import React, { useEffect } from 'react'
import { attributesSelector, getCollectionAttr, snipeCollectionSelector } from '../../redux/snipeSlice'
import { useSelector,useDispatch } from 'react-redux'
import Attribute from './Attribute'
export default function Attributes() {
  
  const snipeCollection = useSelector(state=>snipeCollectionSelector(state))
  const attributes = useSelector(state=>attributesSelector(state))
  const dispatch = useDispatch()
  useEffect(()=>{
    if(snipeCollection){
      dispatch(getCollectionAttr(snipeCollection))
    }
  },[snipeCollection,dispatch])

  return (
    <aside>
      
      {Object.entries(attributes).map(([trait,values],index)=>(
          <Attribute key={index} trait={trait} options={values} />
      ))}
    </aside>
  )
}
