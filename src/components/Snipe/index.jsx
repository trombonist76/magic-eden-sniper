import Attributes from "./Attributes"
import NftList from "../NftList"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {handleSnipeCollection} from "../../utils/snipe"
import {useSelector} from 'react-redux'

const animatedComponents = makeAnimated()

export default function Snipe() {
  const collections = useSelector(state=>state.collections.collections)
  const handleChange = (collection) => {
    handleSnipeCollection(collection.symbol)
  }
  
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
