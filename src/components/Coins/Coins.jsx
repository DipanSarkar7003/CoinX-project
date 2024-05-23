import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroCoin from "./HeroCoin";

function Coins() {
  const [currency, setCurrency] = useState("inr");
  const [coinData, setCoinData] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState("bitcoin");
  const [selectedCoin, setSelectedCoin] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": "CG-w7iy4D1gnHJWs1X9d7JGyLPX",
      changeOrigin: true,
    },
  };
  const coinUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

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
        setSelectedCoin(coinData[Math.floor(Math.random) * coinData.length]);
      } catch {
        console.log("err");
      }
    };
    fetchCoinData();
  }, [currency]);

  useEffect(() => {
    const thatCoin = coinData.find((coin) => coin.id == selectedCoinId);
    console.log(selectedCoin);
    console.log(selectedCoinId);
    console.log(thatCoin);
    thatCoin && setSelectedCoin(thatCoin);
  }, [selectedCoinId, selectedCoin]);

  return (
    <>
      <HeroCoin selectedCoin={selectedCoin} />

      <div className="Coins">
        {coinData.map((item) => (
          <div
            className="coinItem"
            key={item.id}
            id={item.id}
            onClick={(e) => setSelectedCoinId(item.id)}
          >
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>
              price({currency}) : {item.current_price} {"  "}
              <span
                className={
                  item.price_change_percentage_24h < 0 ? "priceDown" : "priceUp"
                }
              >
                {Math.round(item.price_change_percentage_24h).toFixed(2)}
                {"% "}
                {item.price_change_percentage_24h < 0 ? (
                  <span>&#x2B9F;</span>
                ) : (
                  <span>&#x2B9D;</span>
                )}{" "}
              </span>
            </p>
            <input
              type="range"
              min={item.low_24h}
              max={item.high_24h}
              // value={item.current_price}
              defaultValue={item.current_price}
            />
            progress{" "}
          </div>
        ))}
      </div>
    </>
  );
}

export default Coins;
