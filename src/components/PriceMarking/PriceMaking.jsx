import React from "react";
import CoinItem from "../../Pages/Coins/CoinItem";

function PriceMaking({ coin }) {
  return (
    <>
      <span
        className={
          coin?.price_change_percentage_24h < 0 ? "priceDown" : "priceUp"
        }
      >
        {Math.round(coin?.price_change_percentage_24h).toFixed(2)}
        {"% "}{" "}
        {coin?.price_change_percentage_24h < 0 ? (
          <span>&#x2B9F;</span>
        ) : (
          <span>&#x2B9D;</span>
        )}{" "}
      </span>
    </>
  );
}

export default PriceMaking;
