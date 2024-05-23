import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];


  return (<>
       <h1 className="accordionHeadding">Dont over search everything you need to know  <span>is here .. </span> </h1>
    <div className="accordion">
      
      {faqs.map((item, index) => (
        <AccordianItem item={item}  index={index} key={index}/>
      ))}
    </div>
      </>
  );
};

export default Accordian;






