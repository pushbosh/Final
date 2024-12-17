import React, { useState } from "react";
import "./Accordion.css";
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Accordion">
      <div className="title" ><h4>
        {title} 
      </h4>
      <span onClick={() => setIsOpen(!isOpen)} style={{cursor:"pointer", fontWeight:"bold"}} >{isOpen ? "-" : "+"} </span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
