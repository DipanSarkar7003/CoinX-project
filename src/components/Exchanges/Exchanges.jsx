import React, { useEffect, useState } from "react";
import ExchangeItem from "./ExchangeItem";
import axios from "axios";

const Exchanges = () => {
  const [data, setData] = useState([]);
  const [ isLoading , setIsLoading] = useState(false)

  // const Header = "https://api.coingecko.com/api/v3";
  // const URL = "https://api.coingecko.com/api/v3/exchanges";

  // setIsLoading(true);
        // const ExchangesData = await axios.get(URL)
        // setIsLoading(true)
        // // const result = await fetch(URL);
        // // const res = await result.json();
        // setData(ExchangesData.data);
        // setIsLoading(false)

        const options = {
          method: 'GET',
          url: 'https://coingecko.p.rapidapi.com/exchanges',
          headers: {
            'X-RapidAPI-Key': 'a2a99b7876msh36cbdc87e7994f6p1ea89cjsne927b97405b5',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
          }
        };
        
  useEffect(
    () =>{

    

// RAPID API TESTING 

  async function getData() {
        
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }


      }
      getData()
    } ,
      
    []
    
  );

  return (
    <>
    <h1 className="exchangesHeadding">Dont look "Idhar Udhar"here are top Exchanges of the <span>Market ...</span>
    </h1>
    {isLoading?<h1 style={{textAlign:"center"}}>loading...</h1>:
        <div className="exchanges">
          {data.map((item) => <ExchangeItem item={item} key={item.id}/>)}
          </div>
    }
      </>
  );
};

export default Exchanges;

