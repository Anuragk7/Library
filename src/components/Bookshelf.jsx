import React from 'react';
import BookCard from './Book';
import debounce from 'lodash.debounce';
import { useState,useEffect } from 'react';

const Bookshelf = () => {
    // const [query, setQuery] = useState('');
    // const [results, setResults] = useState([]);

    // const fetchData = async (query, cb) => {
    // const res = await fetchSearchResults(query);
    //   cb(res);
    // };
    // const debouncedFetchData = debounce((query, cb) => {
    // fetchData(query, cb);
    // }, 500);
    
   

    // useEffect(() => {
    // debouncedFetchData(query, res => {
    // setResults(res);
    // });
    // }, [query]);

  return (
    <div>
        HEllo
      {/* <div>
      <BookCard author = "me" edition = "10" year = "2002" />
      <BookCard author = "me" edition = "10" year = "2002" />
      <BookCard author = "me" edition = "10" year = "2002" />
      <BookCard author = "me" edition = "10" year = "2002" />
      <BookCard author = "me" edition = "10" year = "2002" />
    </div> */}
    </div>
  );
};

export default Bookshelf;
