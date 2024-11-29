import { Line } from "react-chartjs-2";
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
Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartsComp = ({ coinChartData, currency, days }) => {
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
        label: `Prices`,
        data: prices,
        borderColor: "green",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderWidth: 1,
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Currency Prices in : ${currency} ,  Data of ${days} days`,
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Prices",
        },
      },
    },
  };

  return (
    <div className="ChartWrapper">
      <Line data={data} options={option} />
    </div>
  );
};

export default ChartsComp;
