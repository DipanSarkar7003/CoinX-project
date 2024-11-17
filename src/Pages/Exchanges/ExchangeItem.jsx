import { Link } from "react-router-dom";
const ExchangeItem = ({ item }) => {
  return (
    <div className="exchangeItem">
      <img className="exchangeItemImage" src={item.image} alt=" coin imag" />
      <h3 className="exchangeItemName">{item.name}</h3>

      <p>Trade vloume(24h) : {Math.floor(item.trade_volume_24h_btc)}</p>
      <p> Year Published : {item.year_established}</p>
      <span className="exchangeItemUrl">
        <a href={item.url}> visit &#8599;</a>
      </span>
      <p className="score">Score : {item.trust_score} </p>
      <span className="seMore visit-btn">
        <Link to={`/exchanges/${item.id}`}>full details</Link>
      </span>
    </div>
  );
};

export default ExchangeItem;
