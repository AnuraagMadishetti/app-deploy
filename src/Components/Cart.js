import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
