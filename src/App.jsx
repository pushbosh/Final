import React, { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";
import SearchBar from "./components/SearchBar";
import UpdateButton from "./components/UpdateButton";

import "./components/Search-bar.css";
import "./components/boton.css";
function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      setCryptoData(data.data);
      setFilteredData(data.data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const handleSearch = (query) => {
    const filtered = cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Cryptocurrency Prices</h1>
      <SearchBar onSearch={handleSearch} />
      <UpdateButton onClick={fetchCryptoData} />
      <CryptoList data={filteredData} loading={loading} />
    </div>
  );
}

export default App;
