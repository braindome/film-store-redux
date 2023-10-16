import { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";

function App() {
  const [filmData, setFilmData] = useState(null);

  const handleFilmData = (data) => {
    setFilmData(data);
  };

  return (
    <div className="app_wrapper">
      <Navbar />
      <div className="inner_wrapper">
        <SearchBar onFilmData={handleFilmData} />
        <div className="result_cart_wrapper">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default App;
