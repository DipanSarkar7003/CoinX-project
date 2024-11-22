import CurrencySymbol from "../../components/CurrencySymbol";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function CoinItem({ item, setSelectedCoinId, currency }) {
  return (
    <div
      className="card "
      key={item.id}
      id={item.id}
      onClick={() => setSelectedCoinId(item.id)}
    >
      <div className="coinCardTop">
        <div className="coinCardTop_left">
          <img src={item.image} alt="" className="coinImage" />
          <span>
            <p className="heading">{item.name} </p>
            <span className="symbol">{item.symbol}</span>
          </span>
        </div>
        <Link to={`/coins/${item.id}`} className="coinCardTop_right" type="button">
          <GoArrowUpRight />
        </Link>
      </div>
      <p className="price">
        <span className="currencySymbolWrapper"></span>
        <CurrencySymbol currency={currency} /> {item.current_price} {"  "}
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
      </p>
      <p className="market_cap">
        Market Cap: <CurrencySymbol currency={currency} /> {item.market_cap}
      </p>
      <p className="volume">Total volume: {item.total_volume}</p>
    </div>
  );
}

export default CoinItem;
