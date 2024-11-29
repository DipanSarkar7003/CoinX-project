import React from "react";
import PriceMaking from "../../components/PriceMarking/PriceMaking";

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

            <PriceMaking coin={item} />
          </li>
        </>
      ))}{" "}
    </div>
  );
};

export default Coinstack;
