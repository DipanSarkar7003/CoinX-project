import axios from "axios";
import { useEffect, useState } from "react";
import HeroCoin from "./HeroCoin";
import CoinItem from "./CoinItem";

function Coins() {
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState(1);
  const [coinData, setCoinData] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState("bitcoin");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinChartData, setCoinChartData] = useState([]);

  const coinChartUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoinId}/market_chart?vs_currency=${currency}&days=${days}`;
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
      page: "1",
      sparkline: "false",
      vs_currency: currency,
      per_page: "25",
      order: "market_cap_desc",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_COINs_LIST_KEY,
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchCoinData = async () => {
      console.log("Fetching");
      try {
        const data = await axios.request(options);
        setCoinData(data.data);

        if (data.data.length && !selectedCoin) {
          setSelectedCoin(
            data.data[Math.floor(Math.random() * data.data.length)]
          );
        }

        const { data: coinChartFetch } = await axios.get(coinChartUrl);
        setCoinChartData(coinChartFetch.prices);
        console.table(coinChartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoinData();
  }, [currency, selectedCoinId, days]);

  useEffect(() => {
    const thatCoin = coinData.find((coin) => coin.id === selectedCoinId);
    if (thatCoin) {
      setSelectedCoin(thatCoin);
    }
  }, [selectedCoinId]);

  console.log("component rendered");

  return (
    <>
      <HeroCoin
        selectedCoin={selectedCoin}
        coinChartData={coinChartData}
        setCurrency={setCurrency}
        currency={currency}
        setDays={setDays}
        days={days}
        coinData={coinData}
        setSelectedCoinId={setSelectedCoinId}
      />

      <div className="Coins">
        {coinData.map((item) => (
          <CoinItem
            item={item}
            selectedCoinId={selectedCoinId}
            setSelectedCoinId={setSelectedCoinId}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Coins;
