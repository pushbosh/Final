import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'royalblue',
      color: 'white',
      padding: '5px',
      borderRadius: '4px',
      zIndex: 1000,
      maxWidth: '150px',
      minHeight: '100px',
      textWrap:"wrap",
      textAlign:"center",
    }}>
      {text}
    </div>
  );
};

const CryptoItem = ({ crypto }) => {
  const priceChangeStyle = {
    color: crypto.percent_change_24h > 0 ? "green" : "red",
  };

  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div style={{ position: 'relative' }}>
      {/* <h3>{crypto.name} ({crypto.symbol})</h3> */}
      <p>Price (USD): ${crypto.price_usd}</p>
      <p>Price (BTC): {crypto.price_btc} BTC</p>
      <p>
        Market Cap: ${crypto.market_cap_usd} 
        <span 
          onMouseEnter={() => setShowTooltip(true)} 
          onMouseLeave={() => setShowTooltip(false)} 
          style={{ cursor: "pointer" }}
        >
          ⓘ
        </span>
        {showTooltip && <Tooltip text="The market
         capitalization of a 
         cryptocurrency is
         calculated by 
         multiplying the number 
         of coins in circulation by 
         the current price" />}
      </p>
      <p style={priceChangeStyle}>24h Change: {crypto.percent_change_24h}%</p>
    </div>
  );
};

export default CryptoItem;
