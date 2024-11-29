import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaRegEye } from "react-icons/fa";

import { coinContext } from "../../context/CoinContext";
import ChartsComp from "../Coins/ChartsComp";
import Currency from "../Coins/Currency";
import Days from "../Coins/Days";
import "./singleCoin.css";
import PriceMaking from "../../components/PriceMarking/PriceMaking";
function SingleCoin() {
  const { id } = useParams();
  const { currency, days, setCurrency, setDays } = useContext(coinContext);
  const [singleCoinChartData, setSingleCoinChartData] = useState([]);
  const [singleCoinData, setSingleCoinData] = useState({});
  const [isloading, setIsloading] = useState(false);
  const coinChartUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${id}`,
    params: {
      localization: "true",
      tickers: "true",
      market_data: "true",
      community_data: "true",
      developer_data: "true",
      sparkline: "false",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_COIN_CHART_API_KEY,
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setIsloading(true);

    async function getSingleCoinChart() {
      try {
        const { data: coinChartFetch } = await axios.get(coinChartUrl);
        setSingleCoinChartData(coinChartFetch.prices);
      } catch (err) {
        console.error(err);
      }
    }
    async function getSingleCoinData() {
      try {
        const response = await axios.request(options);
        setSingleCoinData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleCoinChart();
    getSingleCoinData();
    setIsloading(false);
  }, [days, currency, id]);

  //IF NO ID MATCH OR FOUND JUST RETURN

  if (!id) {
    return <h1>No data found for this coin ...</h1>;
  }

  // IF ID FOUND THEN

  if (isloading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <div className="singleCoinTopPart">
        <div className="coinDetails-box">
          <img src={`${singleCoinData?.image?.small}`} alt="" />
          <h3>{singleCoinData?.name}</h3>
        </div>
        <div>
          <Currency setCurrency={setCurrency} />
          <Days setDays={setDays} days={days} />
        </div>
      </div>
      <div className="chartCompWrapper">
        <ChartsComp
          coinChartData={singleCoinChartData}
          currency={currency}
          days={days}
        />
      </div>{" "}
      <div className="coinDetails-box">
        <div className="detail_box_top">
          <div className="name_details">
            <h1>{singleCoinData.name}</h1>
            <div className="additional">
              <h5>Symbol : {singleCoinData.symbol}</h5>
              <h5>Rank : {singleCoinData.market_cap_rank}</h5>
            </div>
          </div>

          <div className="price_details">
            <h3>Price : </h3>
            <h3>
              {" "}
              {singleCoinData?.market_data?.current_price?.[currency] ||
                "No Data found"}{" "}
              {currency}
            </h3>
            <PriceMaking coin={singleCoinData.market_data} />
          </div>
          <div>
            <div className="eye_icon">
              <FaRegEye />
            </div>
          </div>
        </div>

        <h3>
          24H Volume :{" "}
          {singleCoinData.market_data?.total_volume?.[currency] ||
            "no data found "}
        </h3>
      </div>
    </>
  );
}
export default SingleCoin;
