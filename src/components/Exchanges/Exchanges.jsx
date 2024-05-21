import React, { useEffect, useState } from "react";
import ExchangeItem from "./ExchangeItem";

const Exchanges = () => {
  const [data, setData] = useState([]);
  const [ isLoading , setIsLoading] = useState(false)

  const Header = "https://api.coingecko.com/api/v3";
  const URL = "https://api.coingecko.com/api/v3/exchanges";
  useEffect(
    () =>
      async function getData() {
        setIsLoading(true)
        const result = await fetch(URL);
        const res = await result.json();
        setData(res);
        setIsLoading(false)
      },
      
    []
    
  );
  console.log(data)

  return (
    <>
    <h1 className="exchangesHeadding">Dont look "Idhar Udhar"here are top Exchanges of the <span>Market ...</span>
    </h1>
    {isLoading?<img src={`https://www.casaportoro.com.br/images/load.gif`} alt="" style={{width:"100vw"}} />:
        <div className="exchanges">
          {data.map((item) =>  <ExchangeItem item={item}/>)}
          </div>
    }
      </>
  );
};

export default Exchanges;
