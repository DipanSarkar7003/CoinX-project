import { createContext, useState } from "react";

//Creating the coin context

export const coinContext = createContext();

function CoinContextProvider({ children }) {
  const [days, setDays] = useState(1);
  const [currency, setCurrency] = useState("inr");

  return (
    <coinContext.Provider value={{ days, setDays, currency, setCurrency }}>
      {children}
    </coinContext.Provider>
  );
}

export default CoinContextProvider;
