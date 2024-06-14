import axios from "axios";
import  { useEffect, useState } from "react";
import HeroCoin from "./HeroCoin";
import CoinItem from "./CoinItem"
function Coins() {
  const [currency, setCurrency] = useState("inr");
  const [coinData, setCoinData] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState("bitcoin");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinChartData, setCoinChartData] = useState([]);

  // const coinUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
  const coinChartUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoinId}/market_chart?vs_currency=${currency}&days=1`;

  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {
      page: '1',
      sparkline: 'false',
      vs_currency: currency,
      per_page: '25',
      order: 'market_cap_desc'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_COINs_LIST_KEY,
      'x-rapidapi-host': 'coingecko.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchCoinData = async () => {
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

      try {
        const data = await axios.request(options);
        // fetch(
        //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
        // )
        setCoinData(data.data);
        
        setSelectedCoin(coinData[Math.floor(Math.random()) * coinData.length]);
        console.log("fetching happened");
      

        const {data:coinChartFetch} = await axios.get(coinChartUrl);
        setCoinChartData(coinChartFetch.prices);
        console.log(import.meta.env.VITE_COIN_LIST_KEY)

      } catch (error) {
        console.log(error);
      }
    };
    fetchCoinData();
  }, [currency, selectedCoinId]);



  useEffect(() => {
    const thatCoin = coinData.find((coin) => coin.id == selectedCoinId);
    thatCoin && setSelectedCoin(thatCoin);
  }, [selectedCoinId, selectedCoin]);

  return (
    <>
      <HeroCoin selectedCoin={selectedCoin} coinChartData={coinChartData} setCurrency={setCurrency} currency= {currency} />

      <div className="Coins">
        {coinData.map((item) => (
          <CoinItem
            item={item}
            selectedCoinId={selectedCoinId}
            setSelectedCoinId={setSelectedCoinId}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Coins;
