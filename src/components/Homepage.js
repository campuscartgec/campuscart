import React from 'react';
import Navbar from './Navbar';
import Trending from './hompageComp/Trending';
import Services from './hompageComp/Services.js';
import Header from './hompageComp/Header';
import Footer from './hompageComp/Footer';
import TopFreelancers from './hompageComp/Topfreelancers.js';
import TrendProducts from './hompageComp/TrendProducts.js';
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
       <TopFreelancers/>
       <TrendProducts/>
       <Trending/>
       <Footer/>

    </div>
  );
};

export default Homepage;