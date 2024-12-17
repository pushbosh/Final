import React from "react";
import CryptoItem from "./CryptoItem";
import Accordion from "./Accordion";

const CryptoList = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((crypto) => (
        <Accordion title={crypto.name}>
        <CryptoItem key={crypto.id} crypto={crypto} />
        </Accordion>
      ))}
    </div>
  );
};

export default CryptoList;
