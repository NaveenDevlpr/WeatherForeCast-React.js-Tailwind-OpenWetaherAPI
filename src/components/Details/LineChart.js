import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
    Filler
} from 'chart.js'


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)

const LineChart = ({forecast}) => {
     
    const data={
        labels:forecast.map((data)=>{
            const date = new Date(data.dt_txt);
            const options = { weekday: 'long' }; 
            return date.toLocaleDateString('en-US', options);
        }),
        datasets:[{
            data:forecast.map((data)=>data.main.temp),
            borderWidth: 2.5,
            borderColor: '#4CAF50',
            pointBorderColor:'#222222',
            pointBorderWidth:4,
            tension:0.5,
            backgroundColor: (context)=>{
              const colors=[
                '#87cc89',
                '#f3edf2'
              ]
              const {ctx,data,chartArea:{top,bottom}}=context.chart
              const gradient=ctx.createLinearGradient(0,0,0,300)
              gradient.addColorStop(0,colors[0])
              gradient.addColorStop(0.5,colors[1])
              
              return gradient
            },
            fill: true,
        }]

    }

    const options={
        plugins: {
            legend: {
              display: false,
              position:'top',
              
            },
          },
          responsive: true,
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display:true,
                font: {
                  size:  12,
                  weight: 'normal',
                  family:'Poppins,'
                },
              },
              title: {
                display: true,
                text: 'Temperature',
                padding: {
                  bottom: 0,
                },
                font: {
                  size: 12,
                  family: 'Poppins',
                },
              },
              min: forecast.reduce((pre,acc)=>Math.min(acc.main.temp)-5,0),
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display:true,
                font: {
                  size:  12,
                  weight: 'normal',
                  family:'Poppins'
                },
              },
              title: {
                display: true,
                text: 'Day',
                padding: {
                  top: 2,
                },
                font: {
                  size: 12,
                  family: 'Poppins',
                },
              },
            },
          },
          
        maintainAspectRatio: false,
        };
  return (
    <div className='w-full h-full'>
        <Line  data={data} options={options}></Line>
    </div>
  )
}

export default LineChart