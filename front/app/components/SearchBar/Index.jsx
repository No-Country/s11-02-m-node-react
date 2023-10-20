'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import CategoryBtn from './CategoryBtn';
import buscadorBcnd from '@/public/buscadorBcnd.png';

const SearchBar = () => {
     const router = useRouter();
     const handleBack = () => {
          router.back();
     };
     return (
          <div className="min-h-128 p-4 rounded-md text-center relative">
               <Image
                    src={buscadorBcnd}
                    alt="buscador background"
                    className="absolute inset-0 w-full h-full object-cover"
               />
               <button
                    onClick={handleBack}
                    className="text-3xl md:text-4xl left-3 md:left-10 top-5 absolute">
                    {'<'}
               </button>
               <div className="relative h-full md:pl-42 md:pr-42 lg:pl-68 lg:pr-68 xl:pl-96 xl:pr-96 text-black w-full mt-8 sm:mt-10 md:mt-40 items-center">
                    <input
                         type="text"
                         placeholder="Buscador"
                         className="w-full rounded-xl pl-12 pr-4 py-4 bg-white border-2 border-black focus:outline-none text-xl text-black placeholder-black::placeholder"
                    />
                    <div className="absolute right-4 md:right-44 lg:right-72 xl:right-96 top-3  p-2 pr-4">
                         <BiSearch
                              size={28}
                              className=""
                              //onClick={handleButtonClick}
                              tabIndex="0"
                         />
                    </div>
                    <CategoryBtn />
               </div>
          </div>
     );
};

export default SearchBar;
