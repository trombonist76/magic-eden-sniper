import React, { useEffect } from "react";
import Attribute from "./Attribute";
import Input from "./Input";
import { fetchCollectionAttr, priceFilter, refreshInterval, setPrice, setRefresh, snipeAttributes, snipeCollection } from "../../utils/snipe";


export default function Attributes() {
  const snipeSymbol = snipeCollection()
  const attributes = snipeAttributes()
  const price = priceFilter()
  const refresh = refreshInterval()
  const isThereAnyAttributes = Object.values(attributes).some((values) => values?.length > 0)
  const handlePrice = e => setPrice(e.target.value)
  const handleRefresh = e => setRefresh(e.target.value)
  
  useEffect(() => {
    if (snipeSymbol) {
      fetchCollectionAttr(snipeSymbol)
    }
  }, [snipeSymbol]);

  return (
    <div className="attributes">
      {Object.entries(attributes).map(([trait, values], index) => (
        <Attribute key={index} trait={trait} options={values} />
      ))}

      {isThereAnyAttributes && (
        <Input
          value={price}
          className="input priceFilter"
          placeholder="Max Price (Sol)"
          handleChange={handlePrice}
          compareVal = {0}
          min= "0"
        />
      )}

      {isThereAnyAttributes && (
        <Input
          value={refresh}
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
