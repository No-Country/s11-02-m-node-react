import React from 'react';
import Category from './../components/Category/Category';
import SearchBar from '../components/SearchBar/Index';
import AboutUs from '../components/AboutUs/Index';
import Products from '../components/Products/Index';
import GetAccount from '../components/GetAccount/Index';

const LandingPage = () => {
     return (
          <div className="">
               <SearchBar />
               <AboutUs />
               <Products />
               <GetAccount />
               <Category />
          </div>
     );
};

export default LandingPage;
