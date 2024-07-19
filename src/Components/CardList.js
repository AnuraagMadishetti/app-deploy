import React from 'react';

const CardList = ({ cards, onCardClick }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => onCardClick(card.id)}
        >
          {card.title}
        </div>
      ))}
    </div>
  );
};

export default CardList;
