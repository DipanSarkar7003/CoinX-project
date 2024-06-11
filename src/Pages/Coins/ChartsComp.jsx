import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartsComp = ( {coinChartData , currency }) => {
    let prices = [];
    let date = [];
    for (let i = 0; i < coinChartData.length; i++) {
      date.push(new Date(coinChartData[i][0]).toLocaleDateString());
      prices.push(coinChartData[i][1]);
    }  
    let data = {
      labels: date,
      datasets: [
        {
          label: `Dates`,
          data: prices,
          borderColor: "rgb(255,99,132)",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderWidth: 1,
        },
      ],
    };
    const option = {   
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Currency Prices in ${currency}`,
      },
      legend: {
        position: "bottom",
      },
    },
    }
 
    
  return (
    <Line data={data} options={option} style={{width:"80vw" ,height:"100vw" , margin:"auto"}}/>
  )
}

export default ChartsComp