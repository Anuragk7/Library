import React, { useEffect, useState } from 'react';

const BookCard = (props) => {
  const details = props.details;
  const path = "https://covers.openlibrary.org/b/isbn/";
  const [isAdded, setIsAdded] = useState(false);
  


  //let books = storedBooks ? JSON.parse(storedBooks) : [];
  useEffect(()=>{
    const storedBooks = localStorage.getItem('books');
    let books = storedBooks ? JSON.parse(storedBooks) : [];
    if (books.some(book => book.isbn === details.isbn)) {
        setIsAdded(true);
    }
  },[])
 

  function onAdd() {
    const storedBooks = localStorage.getItem('books');
    let books = storedBooks ? JSON.parse(storedBooks) : [];
    if (!books.some(book => book.isbn === details.isbn)) {
       
        const updatedBooks = [...books, details];
        localStorage.setItem('books', JSON.stringify(updatedBooks));
        setIsAdded(true);
        console.log('updated', updatedBooks);
      }
  }

  function onRemove() {
    const storedBooks = localStorage.getItem('books');
    let books = storedBooks ? JSON.parse(storedBooks) : [];
    const updatedBooks = books.filter(book => book.isbn !== details.isbn);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setIsAdded(false);
    alert('Book removed from your bookshelf!');
  }

  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-lg shadow-md overflow-hidden md:max-w-2xl transition transform hover:scale-105">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={`${path}${details.isbn}-L.jpg`} alt={details.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">{details.title}</div>
          <p className="mt-2 text-gray-400">Author: {details.author}</p>
          <p className="mt-1 text-gray-400">Rating: {details.rating}</p>
          <p className="mt-1 text-gray-400">Published: {details.year}</p>
          {isAdded ? (
            <button
              onClick={onRemove}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
            >
              Remove from Bookshelf
            </button>
          ) : (
            <button
              onClick={onAdd}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
            >
              Add to Bookshelf
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
