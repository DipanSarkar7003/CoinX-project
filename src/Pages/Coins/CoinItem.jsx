import React from 'react'

function CoinItem( {item , setSelectedCoinId , }) {
  return (
  //   <div
  //   className="coinItem"
  //   key={item.id}
  //   id={item.id}
  //   onClick={() => setSelectedCoinId(item.id)}
  // >
  //   <img src={item.image} alt="" />
  //   <h3>{item.name}</h3>
  //   <p>
  //     price: {item.current_price} {"  "}
  //     <span
  //       className={
  //         item.price_change_percentage_24h < 0 ? "priceDown" : "priceUp"
  //       }
  //     >
  //       {Math.round(item.price_change_percentage_24h).toFixed(2)}
  //       {"% "}
  //       {item.price_change_percentage_24h < 0 ? (
  //         <span>&#x2B9F;</span>
  //       ) : (
  //         <span>&#x2B9D;</span>
  //       )}{" "}
  //     </span>
  //   </p>
  //   <input
  //     type="range"
  //     min={item.low_24h}
  //     max={item.high_24h}
  //     // value={item.current_price}
  //     defaultValue={item.current_price}
  //   />
  //   progress{" "}
  // </div>


  <div className="card "  key={item.id}
     id={item.id}
    onClick={() => setSelectedCoinId(item.id)}>
    <img src={
      item.image
    } alt="" className='coinImage'/>

<p className="heading">
{item.name}  </p>
<p>
       price: {item.current_price} {"  "}
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

  <p> <input
     type="range"
     min={item.low_24h}
     max={item.high_24h}
    // value={item.current_price}
     defaultValue={item.current_price}
   />
</p></div>


  )
}

export default CoinItem