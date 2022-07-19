import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { handleStatCollections } from '../../utils/stats'
import {colors,customStyles} from "../Select/styles"
import StatList from './StatList'

export default function Stats() {
  const {collections} = useSelector(state=>state.collections)
  const handleChange = (selecteds) => {
    handleStatCollections(selecteds)
  }
  const coloredOpts = collections.map((option,index)=>({...option, color: colors[index % colors.length]}))

  return (
    <div className="statistics">
      <aside>
        <Select
          isMulti
          className='select'
          onChange={handleChange}
          styles={customStyles}
          closeMenuOnSelect={false}
          placeholder="Select Collections"
          options={coloredOpts} 
          getOptionLabel={(option)=>option.name}
          getOptionValue={(option)=>option.symbol}
        />
      </aside>

      <StatList/>
      
  </div>
  )
}

