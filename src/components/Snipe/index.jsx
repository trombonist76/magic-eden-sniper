import React, { useEffect } from "react"
import Attributes from "./Attributes"
import NftList from "../NftList"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { fetchCollections, handleSnipeCollection, newCollections } from "../../utils/snipe"

const animatedComponents = makeAnimated()

export default function Snipe() {
  const collections = newCollections()
  const handleChange = (collection) => {
    handleSnipeCollection(collection.symbol)
  }
  
  useEffect(() => {
    fetchCollections()
  }, [])

  return (
    <div className="snipe">
      <aside>
        <Select className='attribute'
          onChange={handleChange}
          placeholder="Select Collection"
          options={collections} 
          closeMenuOnSelect={true}
          components={animatedComponents}
          getOptionLabel={(option)=>option.name}
          getOptionValue={(option)=>option.symbol}
        />
        <Attributes />
      </aside>
      
      <NftList />
    </div>
  );
}
