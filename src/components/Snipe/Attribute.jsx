import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { selectedAttrsSelector, setSelectedAttrs } from '../../redux/snipeSlice';


export default function Attribute({options,trait}) {
  const dispatch = useDispatch()
  const selecteds = useSelector(state=> selectedAttrsSelector(state))
  const handleChange = (values) => {
    dispatch(setSelectedAttrs({trait_type:trait,attributes:values}))
  }
  return (
    <Select
      onChange={handleChange}
      styles={customStyles}
      placeholder={trait}
      options={options} 
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      getOptionLabel={(option)=>option.attribute.value}
      getOptionValue={(option)=>option.attribute.value}
    />
  )
}


const animatedComponents = makeAnimated();
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 5,
  }),

  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),


}
