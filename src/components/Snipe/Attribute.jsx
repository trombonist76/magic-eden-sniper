import React from 'react'
import Select from 'react-select'
import { addSelectedAttr } from '../../utils/snipe';
import {colors,customStyles} from "../Select/styles"

export default function Attribute({options,trait}) {
  const coloredOpts = options.map((option,index)=>({...option, color: colors[index % colors.length]}))
  const handleChange = (values) => {
    addSelectedAttr({trait,values})
  }
  return (
    <Select className='attribute'
      onChange={handleChange}
      styles={customStyles}
      placeholder={trait}
      options={coloredOpts} 
      closeMenuOnSelect={false}
      isMulti
      getOptionLabel={(option)=>option.attribute.value}
      getOptionValue={(option)=>option.attribute.value}
    />
  )
}