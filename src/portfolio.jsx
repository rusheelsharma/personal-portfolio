import React from "react";

function Portfolio(props) {
  return (
    <div className="portfolio-section"> 
      <h1 className="title">{props.heading}</h1>
      <p>{props.description}</p>
  
    </div>
  );
}

export default Portfolio;
