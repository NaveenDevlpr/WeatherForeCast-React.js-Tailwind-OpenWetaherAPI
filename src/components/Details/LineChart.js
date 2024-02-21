import React from 'react'
import {Line} from 'react-chartjs-2'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    PointELement,
    LinearScale
} from 'chart.js'
import { callback } from 'chart.js/dist/helpers/helpers.core'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointELement
)
const LineChart = ({forecast}) => {

    const data={
        labels:[],
        datasets:[{
            data:[],
            backgroundColor: 'transparent',
            borderColor: '',
            pointBorderColor:'',
            pointBorderWidth:4,
            tension:0.5
        }]

    }

    const options={
        plugins:{
            legend:false
        },
        scale:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:2,
                max:10,
                ticks:{
                    stepSize:2,
                    callback:(value)=>value+"k"
                },
                grid:{
                    borderDash:[10]
                }
            }
        }
    }

  return (
    <div>
        <Line data={data} options={options}></Line>
    </div>
  )
}

export default LineChart