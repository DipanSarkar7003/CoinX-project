import { IoLogoUsd } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { color } from "chart.js/helpers";

const CurrencySymbol = ({ currency }) => {
  return (
    <span style={{ verticalAlign:"middle", marginRight:"-5px"}}>
      {currency === "usd" && <IoLogoUsd />}
      {currency == "inr" && <BsCurrencyRupee />}
    </span>
  );
};

export default CurrencySymbol;
