import React from 'react'
import ChartsComp from './ChartsComp'

const HeroCoin = ({selectedCoin ,coinChartData}) => {
  console.log(selectedCoin)

  return (<>
   {selectedCoin?  <div className="heroCoinBanner">
<img src={selectedCoin.image} alt="" className='SelectedCoinImage'  />
<h1 className='SelectedCoinName'>{selectedCoin.name} <span style={{textTransform:"uppercase", fontWeight:"300" , color:"orange" , fontSize:"1rem"}}>{selectedCoin.symbol}</span> </h1> 
<p>
            <strong>price :</strong>  {selectedCoin.current_price} {"  "}
              <span
                className={
                  selectedCoin.price_change_percentage_24h < 0 ? "priceDown" : "priceUp"
                }
              >
                {Math.round(selectedCoin.price_change_percentage_24h).toFixed(2)}
                {"% "}
                {selectedCoin.price_change_percentage_24h < 0 ? (
                  <span>&#x2B9F;</span>
                ) : (
                  <span>&#x2B9D;</span>
                )}{" "}
              </span>
            </p>
<p> {selectedCoin.description}</p>
<p> <strong>Max supply :</strong>  {selectedCoin.total_supply}</p>
<ChartsComp coinChartData={coinChartData}/>
<div className="chartComponet" >
  
</div>


 </div>
  : <h1>data not found </h1> }

  
  </>
  )
}

export default HeroCoin