import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale
} from 'chart.js'


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const LineChart = ({forecast}) => {

    const [value,setValue]=useState([])

    const getDayFromDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { weekday: 'long' }; 
        return date.toLocaleDateString('en-US', options);
      };
    
     
    const data={
        labels:forecast.map((data)=>{
            const date = new Date(data.dt_txt);
            const options = { weekday: 'long' }; 
            return date.toLocaleDateString('en-US', options);
        }),
        datasets:[{
            data:forecast.map((data)=>data.main.temp),
            backgroundColor: function(context) {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#222222");
                gradient.addColorStop(1, "#222222");
                return gradient;
              },
            fill: true,
            borderColor: '#4CAF50',
            pointBorderColor:'#222222',
            pointBorderWidth:4,
            tension:0.5
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
                  size:  14,
                  weight: 'normal',
                },
              },
              title: {
                display: false,
                text: 'Temperature',
                padding: {
                  bottom: 0,
                },
                font: {
                  size: 16,
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
                  size:  14,
                  weight: 'normal',
                },
              },
              title: {
                display: true,
                text: 'Day',
                padding: {
                  top: 5,
                },
                font: {
                  size: 16,
                  family: 'Poppins',
                },
              },
            },
          },
          
        maintainAspectRatio: false
        };
  return (
    <div className='w-full h-full'>
        <Line  data={data} options={options}></Line>
    </div>
  )
}

export default LineChart