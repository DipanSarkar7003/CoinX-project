import React from 'react'

const Coinstack = ({coinData}) => {
  return (
    <div className='Coinstack' style={{display:"flex" , flexDirection:"column"  , border:"1px solid #dadada"}}>
{coinData.map((item, index) => (
  <li key={index} style={{listStyleType:"none" , display:"flex" , gap:"0.2rem", borderBottom:"1px solid #dadada" , padding:"5px 0"  }}>
    <img src={item.image} alt="" style={{width:"20px"}} />
    <p style={{ textWrap:"nowrap"}}>{item.name}</p>
  </li>
))}    </div>
  )
}

export default Coinstack