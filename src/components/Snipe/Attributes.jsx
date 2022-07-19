import React, { useEffect } from "react";
import Attribute from "./Attribute";
import Input from "./Input";
import { fetchCollectionAttr, setPrice, setRefresh} from "../../utils/snipe";
import { useSelector } from 'react-redux'


export default function Attributes() {
  const {collection} = useSelector(state=>state.snipe)
  const {attributes} = useSelector(state=>state.snipe)
  const {priceFilter} = useSelector(state=>state.snipe)
  const {refreshInterval} = useSelector(state=>state.snipe)
  const isThereAnyAttributes = Object.values(attributes).some((values) => values?.length > 0)
  const handlePrice = e => setPrice(e.target.value)
  const handleRefresh = e => setRefresh(e.target.value)
  
  useEffect(() => {
    if (collection) {
      fetchCollectionAttr(collection)
    }
  }, [collection]);

  return (
    <div className="attributes">
      {Object.entries(attributes).map(([trait, values], index) => (
        <Attribute key={index} trait={trait} options={values} />
      ))}

      {isThereAnyAttributes && ( 

        <Input
          value={priceFilter}
          className="input priceFilter"
          placeholder="Max Price (Sol)"
          handleChange={handlePrice}
          compareVal = {0}
          min= "0"
        />
      )}

      {isThereAnyAttributes && (
        <Input
          value={refreshInterval}
          className="input refreshInterval"
          placeholder="Refresh Interval (second)"
          handleChange={handleRefresh}
          compareVal = {1}
          interval={0.1}
          min= "0.4"

        />
      )}
    </div>
  );
}
