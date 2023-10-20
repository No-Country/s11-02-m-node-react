import React from 'react';
import Category from './../components/Category/Category';
import AboutUs from '../components/AboutUs/Index';
import Products from '../components/Products/Index';
import Info from '../components/Description/Info';

const LandingPage = () => {
     return (
          <div className="">
               <Info />
               <AboutUs />
               <Category />
               <Products />
               {/* <GetAccount /> */}
          </div>
     );
};

export default LandingPage;
