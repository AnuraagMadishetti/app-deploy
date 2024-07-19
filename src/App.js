import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import CardList from './Components/CardList';
import CardDetail from './Components/CardDetail';
import Carsoul from './Components/Carsoul';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/cards').then((response) => {
  //     setCards(response.data.cards);
  //   });
  // }, []);

  const handleCardClick = (cardId) => {
    const selected = cards.find((card) => card.id === cardId);
    setSelectedCard(selected);
  };

  return (
    <div className="App">
      <h1>Card Details App</h1>
      <Carsoul/>
      <CardList cards={cards} onCardClick={handleCardClick} />
      {selectedCard && <CardDetail card={selectedCard} />}
    </div>
  );
}

export default App;


