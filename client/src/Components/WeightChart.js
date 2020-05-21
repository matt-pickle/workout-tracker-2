import React from "react";
import {Line} from "react-chartjs-2";
import "../Styles/WeightChart.scss";

function WeightChart(props) {
  const datesArr = Object.keys(props.weightHistory) || [];
  const weightsArr = Object.values(props.weightHistory) || [];
  
  //Data and styling for the chart
  const chartData = {
    labels: datesArr,
    datasets: [{
      label: "Weight",
      data: weightsArr,
      borderColor: "rgb(100, 100, 100)",
      borderWidth: 3,
      pointBackgroundColor: "rgb(100, 100, 100)"
    }]
  };
  const chartOptions = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          lineWidth: 1,
          color: "rgb(0, 0, 0)"
        },
        ticks: {
          fontColor: "rgb(100, 100, 100)",
          fontSize: 12,
          fontStyle: "bold"
        }
      }],
      yAxes: [{
        gridLines: {
          lineWidth: 1,
          color: "rgb(0, 0, 0)"
        },
        ticks: {
          fontColor: "rgb(100, 100, 100)",
          fontSize: 12,
          fontStyle: "bold",
          lineHeight: 2
        }
      }]
    }
  }

  return (
    <div className="weightChart">
      <Line data={chartData}
            options={chartOptions}
      />
    </div>
  )
}

export default WeightChart;