import React from "react";

const Coinstack = ({ coinData ,setSelectedCoinId }) => {

    coinData.length = 15

  return (
    <div
      className="Coinstack"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #dadada",
      }}
    >
         
      {coinData.map((item , index) => (<>
       
        <li
          key = {index}
          id={item.id}
          className="CoinstackItem"
          onClick={() => setSelectedCoinId(item.id)}
          style={{
              listStyleType: "none",
              display: "flex",
              gap: "0.2rem",
              borderBottom: "1px solid #dadada",
              padding: "10px 3px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              
            }}
            >
          <img src={item.image} alt="" style={{ width: "20px" }} />
          <p style={{ textWrap: "nowrap" }}>{item.name}</p>
        </li>
      </>
      ))}{" "}
    </div>
  );
};

export default Coinstack;
