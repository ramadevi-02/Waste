
import React, { useState } from 'react';
import BookList from './components/BookList';
import Cart from './components/Cart';
import books from './data/books';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className="App">
      <h1>Book Shopping</h1>
      <BookList books={books} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
