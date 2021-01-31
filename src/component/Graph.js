import React from "react";
import "../style/style.scss";
import { Line } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["0", "1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"],
  datasets: [
    {
      label: "grey",
      data: [33,35,33,28,25,23,25,30,34,36,34,28,23,17,16,25,40,34,30,32,],
      fill: false,

        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#3751ff",endColorstr="#3751ff",GradientType=1)',

      borderColor: "#DFE0EB",
    },
    {
      label: "blue",
      data: [12,20,25,28,30,28,30,38,48,52,38,22,15,18,25,37,44,48,46,34],
      fill: false,
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#3751ff",endColorstr="#3751ff",GradientType=1)',
        // backgroundImage: ' linear-gradient(to right, rgb(236,238,255,100%) , rgb(236,238,255,0%) )',

        borderColor: "#3751FF",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Graph = () => (
  <div className='graph-container' style={{display: 'flex',justifyContent: 'center'}}>
  <div id='graph' style={{width:'60vw', height:'9vh', textAlign:'center'}}>
    <Line data={data} options={options} />
  </div>

  </div>
);

export default Graph;
