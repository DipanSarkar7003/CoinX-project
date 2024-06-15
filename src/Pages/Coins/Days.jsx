import React from 'react'
import Day from './Day'

 const Days = ({setDays , days}) => {

  const  daysArray =[
    {value : 1 , text : "1 Day"} ,
  {value : 7,text : "1 Week"},
   {value:30 , text:"1 Month"} ,
    {value:365 , text:"1 Year"} ]

  return (
    <div className='days' style={{display:"flex" , justifyContent:"space-evenly" , padding:"1rem 0"}}>
        {/* {daysArray.map((item , index)=> <Day item={item} >) )}   */}
        {daysArray.map((item , index)=> <Day item={item} setDays={setDays} key={index}/>)}
        
    </div>
  )}
  export default Days
