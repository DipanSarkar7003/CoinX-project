import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { coinContext } from "../../context/CoinContext";
import ChartsComp from "../Coins/ChartsComp";
import Currency from "../Coins/Currency";
import Days from "../Coins/Days";
function SingleCoin() {
  const { id } = useParams();
  const { currency, days, setCurrency, setDays } = useContext(coinContext);

  const coinChartUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

  const [singleCoinChartData, setSingleCoinChartData] = useState([]);

  useEffect(() => {
    async function getSingleCoinChart() {
      try {
        const { data: coinChartFetch } = await axios.get(coinChartUrl);
        setSingleCoinChartData(coinChartFetch.prices);
        console.table(singleCoinChartData);
      } catch (err) {
        console.error(err);
      }
    }
    getSingleCoinChart();
  }, [days, currency , id]);

  //IF NO ID MATCH OR FOUND JUST RETURN

  if (!id) {
    return <h1>No data found for this coin ...</h1>;
  }

  // IF ID FOUND THEN

  return (
    <>
      <div className="heroCompRightPart">
        <Currency setCurrency={setCurrency} />
        <Days setDays={setDays} days={days} />
      </div>
      <ChartsComp
        coinChartData={singleCoinChartData}
        currency={currency}
        days={days}
      />{" "}
    </>
  );
}
export default SingleCoin;
