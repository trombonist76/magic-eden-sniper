import chroma from 'chroma-js';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select,{components} from 'react-select'
import makeAnimated from 'react-select/animated'
import { selectedAttrsSelector, setSelectedAttrs } from '../../redux/snipeSlice';


const colors = [
  "rgb(0, 184, 217)",
  "rgb(255, 86, 48)",
  "rgb(82, 67, 170)",
  "rgb(255, 139, 0)",
  "rgb(0, 82, 204)",
  "rgb(54, 179, 126)",
  "rgb(82, 67, 170)",
  "rgb(0, 135, 90)",
  "rgb(255, 196, 0)",
  "rgb(37, 56, 88)",
  "rgb(102, 102, 102)",
]

export default function Attribute({options,trait}) {
  const coloredOpts = options.map((option,index)=>({...option, color: colors[index % colors.length]}))
  const dispatch = useDispatch()
  const selecteds = useSelector(state=> selectedAttrsSelector(state))
  const handleChange = (values) => {
    dispatch(setSelectedAttrs({trait_type:trait,attributes:values}))
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




const animatedComponents = makeAnimated();
const customStyles = {
  

    dropdownIndicator: (styles, state) => ({
      ...styles,
    }),

    control: (provided) => ({ ...provided, backgroundColor: '#f8f9fa', color:"red", border:"none"}),

    multiValue: (provided, { data }) => {
      const color = chroma(data.color);
      return {
        ...provided,
        backgroundColor: color.alpha(0.3).css(),
      };
    },


    menu: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
    }),
  

    option: (provided, {data}) => {      
      const color = data.color
      return {
      ...provided,
      color: color,
      backgroundColor: chroma(color).alpha(0.05).css(),
      padding: 7
    }}

}
