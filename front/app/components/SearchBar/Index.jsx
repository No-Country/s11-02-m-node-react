'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import CategoryBtn from './CategoryBtn';
import { photoLinks } from './photoLinks';

const SearchBar = ({ onCategoryChange, category }) => {
     const [photo, setPhoto] = useState(photoLinks[8]);
     const router = useRouter();
     const handleBack = () => {
          router.back();
     };

     useEffect(() => {
          if (category) {
               const selectedPhoto = photoLinks.find(
                    (photo) => photo.category === category
               );
               setPhoto(selectedPhoto);
          } else {
               setPhoto(photoLinks[8]);
          }
     }, [category]);

     console.log('pic', photo);
     return (
          <div className="min-h-128 p-4 rounded-md text-center relative">
               <img
                    src={photo.img}
                    alt={category}
                    className="absolute inset-0 w-full h-full object-cover"
               />
               <button
                    onClick={handleBack}
                    className="text-3xl md:text-4xl left-3 md:left-10 top-5 absolute">
                    {'<'}
               </button>
               <div className="relative h-full md:pl-42 md:pr-42 lg:pl-64 lg:pr-64 lg:pb-44  text-black w-full mt-8 sm:mt-10 md:mt-40 items-center">
                    <input
                         type="text"
                         placeholder="Buscador"
                         className="w-full rounded-xl pl-12 pr-4 py-4 bg-white border-2 border-black focus:outline-none text-xl text-black placeholder-black::placeholder"
                    />
                    <div className="absolute right-4 md:right-40 lg:right-72 xl:right-90 top-5">
                         <BiSearch
                              size={28}
                              className=""
                              //onClick={handleButtonClick}
                              tabIndex="0"
                         />
                    </div>
                    <CategoryBtn onCategoryChange={onCategoryChange} />
               </div>
          </div>
     );
};

export default SearchBar;
