import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  collectionsSelector,
  getCollections,
} from "../../redux/collectionSlice";
import { useDispatch } from "react-redux/";
import { setSnipeCollection } from "../../redux/snipeSlice";
import Attributes from "./Attributes";
import NftList from "../NftList";
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated();

export default function Snipe() {
  const collections = useSelector((state) => collectionsSelector(state));
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSnipeCollection(e.symbol));
  };
  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

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
