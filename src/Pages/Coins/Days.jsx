import React from 'react'

const Days = ({setDays , days}) => {
//     function handleDays(e){
// setDays(e.target.value)
       
//     }


  const  daysArray =[1 , 7 , 30 , 365 , ]

  return (
    <div className='days' style={{display:"flex" , justifyContent:"space-evenly"}}>
        {daysArray.map((item , index)=> <button className="day" onClick={()=>setDays(item)} key={index} value={item} style={{cursor:"pointer"}}>
            {item + "days"}
        </button>)}
       
    </div>
  )
}

export default Days