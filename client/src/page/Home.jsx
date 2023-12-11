import React from 'react';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Category from '../components/Category';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
