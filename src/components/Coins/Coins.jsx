import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroCoin from "./HeroCoin";
import CoinItem from "./CoinItem"
function Coins() {
  const [currency, setCurrency] = useState("inr");
  const [coinData, setCoinData] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState("bitcoin");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinChartData, setCoinChartData] = useState([]);

  const coinUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
  const coinChartUrl = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1`;

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const data = await axios.get(coinUrl);
        // fetch(
        //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
        // )
        setCoinData(data.data);
        const randomNumber = Number(Math.floor(Math.random() * 10));
        console.log(randomNumber);
        setSelectedCoin(coinData[Math.floor(Math.random()) * coinData.length]);

        const {data:coinChartFetch} = await axios.get(coinChartUrl);
        console.log(coinChartFetch.data);
        setCoinChartData(coinChartFetch.prices);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoinData();
  }, [currency]);

  useEffect(() => {
    const thatCoin = coinData.find((coin) => coin.id == selectedCoinId);
    thatCoin && setSelectedCoin(thatCoin);
  }, [selectedCoinId, selectedCoin]);

  return (
    <>
      <HeroCoin selectedCoin={selectedCoin} coinChartData={coinChartData} />

      <div className="Coins">
        {coinData.map((item) => (
          <CoinItem
            item={item}
            selectedCoinId={selectedCoinId}
            setSelectedCoinId={setSelectedCoinId}
          />
        ))}
      </div>
    </>
  );
}

export default Coins;
