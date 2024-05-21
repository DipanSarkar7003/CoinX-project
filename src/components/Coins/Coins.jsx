import React, { useEffect, useState } from "react";

function Coins() {
  const [currency, setCurrency] = useState("usd");
  const [coinData, setCoinData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": "CG-w7iy4D1gnHJWs1X9d7JGyLPX",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
    )
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));

  }, []);

  console.log(coinData)
  return (
    <div className="Coins">
      {coinData.map((item) => (
        <div className="coinItem" key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <p>
            price({currency}) : {item.current_price} {"  "}
           <span
            className={
              item.price_change_percentage_24h < 0 ? "priceDown" : "priceUp"
            }
          >
            {Math.round(item.price_change_percentage_24h).toFixed(2)}{"% "}
            {item.price_change_percentage_24h < 0 ? (
              <span>&#x2B9F;</span>
            ) : (
              <span>&#x2B9D;</span>
            )}{" "}
          </span>
          </p>
<input type="range"  min={item.low_24h} max={item.high_24h} value={item.current_price} />        </div>
      ))}
    </div>
  );
}

export default Coins;
