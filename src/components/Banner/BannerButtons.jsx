import React from 'react'

const BannerButtons = () => {

    const Buttons = ["Highest Return" , "Market Leader" , " New NFT" , "Newly Launch"]

  return (
    <div className='bannerButtons' >
        {Buttons.map((item , index)=> <button className='btn-ui' key={index}>{item}</button>)}
    </div>
  )
}

export default BannerButtons
