'use client';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/Index';
import SubastarBtn from '../components/SubastarBtn/Index';
import Products from '../components/Products/Index';

const Home = () => {
     const [category, setCategory] = useState('');
     const handleCategoryChange = (newCategory) => {
          setCategory(newCategory);
     };

     return (
          <div>
               <SearchBar onCategoryChange={handleCategoryChange} />
               <SubastarBtn />
               <Products category={category} />
          </div>
     );
};

export default Home;
