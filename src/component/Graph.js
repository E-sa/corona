import React from "react";
import "../style/style.scss";
import { Line } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["0", "1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"],
  datasets: [
    {
      label: "# of Votes",
      data: [12,20,25,28,30,28,30,38,48,52,38,22,15,18,25,37,44,48,46,44],
      fill: false,
      backgroundColor: "#3751FF",
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
  <div id='graph' style={{width:'60vw', height:'10vh', textAlign:'center'}}>
    <Line data={data} options={options} />
  </div>

  </div>
);

export default Graph;
