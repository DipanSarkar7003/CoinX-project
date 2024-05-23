import React from 'react'

const HeroCoin = ({selectedCoin}) => {
    console.log(selectedCoin)

  return (<>
   {selectedCoin?  <div className="heroCoinBanner">
<img src={selectedCoin.image} alt="" />
<h2>{selectedCoin.name}</h2>

    </div> : <h1>data not found </h1> }

  
  </>
  )
}

export default HeroCoin