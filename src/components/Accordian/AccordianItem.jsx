import React from 'react'
import { useState } from 'react'

function AccordianItem({item , index}) {

  const [isOpen , setIsOpen] = useState(false)


  return (

     <>
     

    <div className={isOpen?"accordionItem open" : "accordionItem"} onClick={()=>setIsOpen(!isOpen)}>
      <p className="itemCount">{ index<9?`0${index + 1}`:index}</p>
      <p className="itemTitle">{item.title}</p>
      <p className="itemIcon"  >{isOpen?"-":"+"}</p>
    </div>
    {isOpen&&<p className="itemText">{item.text}</p>}
      
    </>
  )
}

export default AccordianItem

