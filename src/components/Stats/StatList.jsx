import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchStats } from '../../utils/stats'
import Stat from "./Stat"
export default function StatList() {
  const {collections} = useSelector(state=>state.stats)
  const {statistics} = useSelector(state=>state.stats)
  useEffect(() => {
    fetchStats()  
  }, [collections])
  

  return (
    <div className='stats'>
        {statistics.map((stat,index)=> <Stat key={index} data={stat}/>)}
    </div>  )
}
