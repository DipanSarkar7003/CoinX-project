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
  const timeStamp = new Date(singleCoinData?.last_updated).toLocaleTimeString();

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
        <div className="logo-details">
          <img
            className="singleCoinImage"
            src={`${singleCoinData?.image?.large}`}
            alt=""
          />
          <h3 className="sinngleCoinTopName">{singleCoinData?.name}</h3>
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
            <div className="additional ">
              <h3>
                Symbol : <span>{singleCoinData.symbol}</span>
              </h3>
            </div>
            <div className="details_flex">
              <small>
                Rank :{" "}
                <span className="">{singleCoinData.market_cap_rank}</span>
              </small>
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

        <div className="detail_box_main">
          <div className="detail_box_main_left">
            <div className="market_cap_details details_flex">
              <small>Market Cap : </small>
              <p>
                {singleCoinData?.market_data?.market_cap?.[currency] ||
                  "No Data found"}{" "}
                {currency}
              </p>
            </div>

            <div className="volume_24h_details details_flex">
              <small>24H Volume :</small>
              <p>
                {singleCoinData?.market_data?.total_volume?.[currency] ||
                  "No Data found"}{" "}
                {currency}
              </p>
            </div>
            <div className="current_supply_details details_flex">
              <small>Circulating Supply : </small>
              <p>
                {singleCoinData?.market_data?.circulating_supply ||
                  "No Data found"}
              </p>
            </div>
            <div className="fdv_details details_flex">
              <small>FDV :</small>
              <p>
                {singleCoinData?.market_data?.fully_diluted_valuation?.[
                  currency
                ] || "No Data found"}
              </p>
            </div>
          </div>
          <div className="detail_box_main_middle">
            <div className="24h_high_details details_flex">
              <small>24H high :</small>
              <p>
                {singleCoinData?.market_data?.high_24h?.[currency] +
                  ` ${currency}` || "Data not found"}
              </p>
            </div>
            <div className="24h_low_details details_flex">
              <small>24H low :</small>
              <p>
                {singleCoinData?.market_data?.low_24h?.[currency] +
                  ` ${currency}` || "Data not found"}
              </p>
            </div>

            <div className="people_buying_details details_flex">
              <small>People buying (%) : </small>
              <p className="green">
                {singleCoinData?.sentiment_votes_up_percentage ||
                  "No Data found"}
              </p>
            </div>
            <div className="people_selling_details details_flex">
              <small>People selling (%) : </small>
              <p className="red">
                {singleCoinData?.sentiment_votes_down_percentage ||
                  "No Data found"}
              </p>
            </div>
          </div>

          <div className="detail_box_main_right">
            <div className="all_time_high_details details_flex">
              <small>All Time High :</small>
              <p>
                {singleCoinData?.market_data?.ath?.[currency] ||
                  "No Data found"}
              </p>
            </div>
            <div className="all_time_low details_flex">
              <small>All Time Low :</small>
              <p>
                {singleCoinData?.market_data?.atl?.[currency] ||
                  "No Data found"}
              </p>
            </div>
            <div className="max_supply_details details_flex">
              <small>Max Supply :</small>
              <p>
                {singleCoinData?.market_data?.max_supply || "No Data found"}
              </p>
            </div>
            <div className="last_update_details details_flex">
              <small>Last Updated :</small>
              <p>{timeStamp || "No Data found"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleCoin;
