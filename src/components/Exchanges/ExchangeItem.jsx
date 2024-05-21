import React from "react";

const ExchangeItem = ({item}) => {
  return (
    <div key={item.id} className="exchangeItem">
      <img src={item.image} alt="" />
      <h3>{item.name}</h3>
      <p> Year Published : {item.year_established
}</p>
<button className="Btn">
<a href={item.url}> visit &#8599;</a>
</button>
<p className="score">Score : {item.trust_score
} </p>

    </div>


  );
};

export default ExchangeItem;
