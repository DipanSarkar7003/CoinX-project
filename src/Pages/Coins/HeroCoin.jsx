import React from "react";
import ChartsComp from "./ChartsComp";
import Days from "./Days";
import Currency from "./Currency";
import Coinstack from "./Coinstack";

const HeroCoin = ({
  selectedCoin,
  coinChartData,
  setCurrency,
  currency,
  setDays,
  days,
  coinData,
  setSelectedCoinId,
}) => {
  return (
    <div className="heroComp">
      {selectedCoin ? (
        <div className="heroCoinBanner">
          <div className="heroCoinInfoPart">
            <div className=" heroCompLeftPart">
              <img
                src={selectedCoin.image}
                alt=""
                className="SelectedCoinImage"
              />
              <h1 className="SelectedCoinName">
                {selectedCoin.name} <span>{selectedCoin.symbol}</span>{" "}
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
                  {Math.round(selectedCoin.price_change_percentage_24h).toFixed(
                    2
                  )}
                  {"% "}{" "}
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
            </div>

            <div className="heroCompRightPart">
              <Currency setCurrency={setCurrency} />
              <Days setDays={setDays} days={days} />
            </div>
          </div>
          <div className="heroCompMainPart">
            <ChartsComp
              coinChartData={coinChartData}
              currency={currency}
              days={days}
            />
            <Coinstack
              coinData={coinData}
              setSelectedCoinId={setSelectedCoinId}
            />
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading your data ... </h1>
      )}
    </div>
  );
};

export default HeroCoin;
