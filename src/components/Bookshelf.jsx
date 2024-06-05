import React from 'react';
import BookCard from './Book';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Bookshelf = () => {
  
    const [results, setResults] = useState([])
    const storedBooks = localStorage.getItem('books');

    useEffect(()=> {
        let books = storedBooks ? JSON.parse(storedBooks) : [];
        setResults(books)
        console.log(results)
   },[])

   
    
  return (
    <div className='bg-black'>
         <div className='bg-black text-center p-1'>
            <button  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800 transition"><Link to = "/">Search Books</Link></button>
        </div>
        {
                    results.map((m, index) => {
                        console.log(m)
                        if (m.author)return (
                           
                            <BookCard key = {index} details = {m} />
                        );
                    })
                }
    </div>
  );
};

export default Bookshelf;
