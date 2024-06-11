import React from "react";
import ChartsComp from "./ChartsComp";

const HeroCoin = ({ selectedCoin, coinChartData , setCurrency , currency }) => {

//   function handleCurrencyChange(e){
// setCurrency(e);
// console.log(currency);
// console.log("changed currency")
//   }


  return (
    <>
      {selectedCoin ? (
        <div className="heroCoinBanner">
          <div className="heroCoinInfoPart" >

          <img src={selectedCoin.image} alt="" className="SelectedCoinImage" />
          <h1 className="SelectedCoinName">
            {selectedCoin.name}{" "}
            <span
              style={{
                textTransform: "uppercase",
                fontWeight: "300",
                color: "orange",
                fontSize: "1rem",
              }}
              >
              {selectedCoin.symbol}
            </span>{" "}
          </h1>
          <p>
            <strong>price :</strong> {selectedCoin.current_price} {"  "}
            <span
              className={
                selectedCoin.price_change_percentage_24h < 0
                ? "priceDown"
                : "priceUp"
              }
              >
              {Math.round(selectedCoin.price_change_percentage_24h).toFixed(2)}
              {"% "}
              {selectedCoin.price_change_percentage_24h < 0 ? (
                <span>&#x2B9F;</span>
              ) : (
                <span>&#x2B9D;</span>
              )}{" "}
            </span>
          </p>
          <p> {selectedCoin.description}</p>
          <p>
            {" "}
            <strong>Max supply :</strong> {selectedCoin.total_supply}
          </p>
          <label htmlFor="currency"> select the currency</label>
           <select name="currency" id="currency" onChange={(e)=>setCurrency(e.target.value)}>

              <option value="inr"  >inr</option>
              <option value="usd"  >usd</option>
              <option value="btc"  >btc</option>
              <option value="eth"  >eth</option>
           </select>

              </div>
          <ChartsComp coinChartData={coinChartData} currency={currency} />
          <div className="chartComponet"></div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading your data ... </h1>
      )}
    </>
  );
};

export default HeroCoin;
