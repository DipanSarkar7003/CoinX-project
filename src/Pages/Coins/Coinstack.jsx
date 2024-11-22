import React from "react";

const Coinstack = ({ coinData, setSelectedCoinId }) => {
  coinData.length = 10;

  return (
    <div className="Coinstack">
      {coinData.map((item, index) => (
        <>
          <li
            key={index}
            id={item.id}
            className="CoinstackItem"
            onClick={() => setSelectedCoinId(item.id)}
          >
            <img src={item.image} alt="" style={{ width: "20px" }} />
            <p style={{ textWrap: "nowrap" }}>{item.name}</p>
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
          </li>
        </>
      ))}{" "}
    </div>
  );
};

export default Coinstack;
