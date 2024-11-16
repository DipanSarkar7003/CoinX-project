import { useEffect, useState } from "react";
import ExchangeItem from "./ExchangeItem";
import axios from "axios";
import "./exchanges.css";

const Exchanges = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/exchanges",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_EXCHANGES_CHART_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  useEffect(
    () => {
      // Fetching Exchanges list data
      async function getData() {
        setIsLoading(true);
        try {
          const response = await axios.request(options);
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }
      getData();
    },
    [] // only re-run effect if data changes
  );

  //   country
  // :
  // "Cayman Islands"
  // description
  // :
  // "One of the world’s largest cryptocurrency exchanges by trading volume, offering a wide range of services including spot, futures, and staking options."
  // has_trading_incentive
  // :
  // false
  // id
  // :
  // "binance"
  // image
  // :
  // "https://coin-images.coingecko.com/markets/images/52/small/binance.jpg?1706864274"
  // name
  // :
  // "Binance"
  // trade_volume_24h_btc
  // :
  // 356038.8756237547
  // trade_volume_24h_btc_normalized
  // :
  // 250959.89871362475
  // trust_score
  // :
  // 10
  // trust_score_rank
  // :
  // 1
  // url
  // :
  // "https://www.binance.com/"
  // year_established
  // :
  // 2017

  return (
    <>
      <h1 className="exchangesHeadding">
        Dont look "Idhar Udhar"here are top Exchanges of the{" "}
        <span>Market ...</span>
      </h1>

      {isLoading ? (
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
          {" "}
          loading your data ...
        </h1>
      ) : (
        <>
          {isLoading ? (
            <h1 style={{ textAlign: "center" }}>loading...</h1>
          ) : (
            <div className="exchanges">
              {data.map((item) => (
                <ExchangeItem item={item} key={item.id} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Exchanges;
