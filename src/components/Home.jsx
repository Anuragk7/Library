import React from 'react';
import BookCard from './Book';
import { Link } from 'react-router-dom';
import SearchBar from './Search';

const Home = () => {
  return (
    <>
    <div className='text-center'>
    <button><Link to = "/Bookshelf"> My Bookshelf</Link></button>
    </div>
    <SearchBar/>
    </>
   
  );
};

export default Home;
