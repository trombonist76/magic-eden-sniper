import React, { PureComponent } from 'react'
import { BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis } from 'recharts';


export default function Chart({chartData}) {
  return (
    <div className='chart'>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={chartData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
        </XAxis>
        <YAxis hide={true} tickLine={false} type="number" domain={[0, dataMax => (dataMax * 1.2)]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="current" fill="#8A9CFF" />
        <Bar dataKey="previous" fill="#ff8a8a" />
      </BarChart>
      </ResponsiveContainer>
  </div>
  )
}
