// src/components/BookList.js
import React from 'react';

function BookList({ books, addToCart }) {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
