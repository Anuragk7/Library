import React from 'react';
import BookCard from './Book';
import { Link } from 'react-router-dom';
import SearchBar from './Search';

const Home = () => {
  return (
    <>
    <div className='bg-black text-center p-1'>
    <button  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800 transition"><Link to = "/Bookshelf"> My Bookshelf</Link></button>
    </div>
    <SearchBar/>
    </>
   
  );
};

export default Home;
