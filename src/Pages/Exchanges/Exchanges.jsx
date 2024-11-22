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
          const finalData = response.data.slice(0, 12);
          setData(finalData);
          console.log(finalData);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }
      getData();
    },
    [] // only re-run effect if data changes
  );

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
