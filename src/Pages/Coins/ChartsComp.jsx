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
  let color;
  let bgcolor;
  for (let i = 0; i < coinChartData.length; i++) {
    date.push(new Date(coinChartData[i][0]).toLocaleDateString());
    prices.push(coinChartData[i][1]);
  }

  if (prices.length === 0) {
    return <h1>No Data Found</h1>;
  }

  const firstPrice = prices[0];
  const lastPrice = prices[prices.length - 1];

  if (firstPrice < lastPrice) {
    color = "green";
    bgcolor = "lightgreen";
  } else {
    color = "red";
    bgcolor = "lightcoral";
  }
  let data = {
    labels: date,
    datasets: [
      {
        label: `Prices`,
        data: prices,
        borderColor: color,
        backgroundColor: bgcolor,
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
  };

  return (
    <div className="ChartWrapper">
      <Line data={data} options={option} />
    </div>
  );
};

export default ChartsComp;
