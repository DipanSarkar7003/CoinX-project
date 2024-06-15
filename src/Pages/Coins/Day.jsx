import React from 'react'

const Day = ({setDays , item}) => {
  return (
    <button className="day" onClick={()=>setDays(item.value)}  value={item.value} style={{cursor:"pointer", padding:"0.5rem 1rem", borderRadius:"10px" , border:"none" , textWrap:"nowrap"}}>
    {item.text}
</button>
  )
}

export default Day