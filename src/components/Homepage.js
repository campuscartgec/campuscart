import React from 'react';
import Navbar from './Navbar';
import Trending from './hompageComp/Trending';
import Services from './hompageComp/Services.js';
import Header from './hompageComp/Header';
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Trending/>
      
    </div>
  );
};

export default Homepage;