import React from 'react'
import StatService from '../../services/statService'

export default function Badge({placeholder,value,priceIcon=false}) {
  const service = new StatService()
  const beautifiedVal = priceIcon ? (value / service.DIVIDE_PERCENT).toFixed(3) : value
  return (
    <li className='badge'>
      <span>{placeholder}</span>
      <span className='price'>{beautifiedVal} {priceIcon && "◎"}</span>
      
    </li>
  )
}
