import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchanges from "./Pages/Exchanges/Exchanges";
import Navbar from "./components/Navbar/Navbar";
import Coins from "./Pages/Coins/Coins";
import ErrorPage from "./components/ErrorPage";
import SingleExchange from "./Pages/singleExchange/SingleExchange";
import SingleCoin from "./Pages/SingleCoin/SingleCoin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/exchanges/:id" element={<SingleExchange />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<SingleCoin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
