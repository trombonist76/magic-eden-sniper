import React from 'react'

export default function Input({placeholder, value, handleChange, compareVal, interval, min, max }) {
  return (
    <label>
      <input type="number" value={value === compareVal ? "" : value} step={interval} min={min} max={max} placeholder={placeholder} onChange={handleChange}/>
    </label>
  )
}
