// src/components/BeerCard.js
import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>ABV: {beer.abv}%</p>
      <p>IBU: {beer.ibu}</p>
      {/* <p>Description: {beer.description}</p> */}
    </div>
  );
};

export default BeerCard;
