import React from 'react';

const CardDetail = ({ card }) => {
  return (
    <div className="card-detail">
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
};

export default CardDetail;
