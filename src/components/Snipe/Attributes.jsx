import React, { useEffect } from "react";
import {
  attributesSelector,
  getCollectionAttr,
  priceFilterSelector,
  setPriceFilter,
  snipeCollectionSelector,
  refreshIntervalSelector,
  setRefreshInterval,
} from "../../redux/snipeSlice";
import { useSelector, useDispatch } from "react-redux";
import Attribute from "./Attribute";
import Input from "./Input";


export default function Attributes() {
  const snipeCollection = useSelector((state) => snipeCollectionSelector(state))
  const attributes = useSelector((state) => attributesSelector(state))
  const price = useSelector((state) => priceFilterSelector(state))
  const refresh = useSelector((state) => refreshIntervalSelector(state))
  const dispatch = useDispatch()

  const isThereAnyAttributes = Object.values(attributes).some((values) => values?.length > 0)
  const handlePrice = e => dispatch(setPriceFilter(e.target.value))
  const handleRefresh = e => {
    console.log("sdafasdf")
    dispatch(setRefreshInterval(e.target.value))
  }
  
  useEffect(() => {
    if (snipeCollection) {
      dispatch(getCollectionAttr(snipeCollection));
    }
  }, [snipeCollection, dispatch]);

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
