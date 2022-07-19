import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import StatService from '../../services/statService'
import Badge from './Badge'
import Chart from './Chart'

export default function Stat({data}) {
  const [escrowData,setEscrowData] = useState(false)
  const service = useMemo(()=>new StatService(),[])
  const escrowObj = service.escrowObject()
  const chartData = service.chartObj(data)
  useEffect(()=>{
    (async()=>{
        const escrow = await service.getCollectionEscrowStats(data.symbol)
        setEscrowData(escrow)})()
  },[service,data.symbol])

  return (

    <div className='stat'>
      <div className="image">
        <img src={data.image} alt={data.symbol} />
      </div>
      <div className="content">
        <h3>{data.name}</h3>
        <div className='badges'>
          {Object.entries(escrowObj).map(([key,value],index)=>(
            <Badge key={index} placeholder={value.placeholder} value={escrowData[key]} priceIcon={value.isPrice} />
          ))}
        </div>
      </div>
      <Chart chartData={chartData}/>
    </div>
  )
}
