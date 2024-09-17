import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((book, index) => (
          <li key={index}>
            {book.title} - ${book.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
