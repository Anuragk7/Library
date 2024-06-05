import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path= "BookShelf" element={<Bookshelf />} />

    </Routes>
  </BrowserRouter>
  );
};

export default App;
