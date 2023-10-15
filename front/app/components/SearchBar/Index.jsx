import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import buscadorBcnd from '@/public/buscadorBcnd.png';

const SearchBar = () => {
     return (
          <div className="bg-gray-200 p-4 rounded-md text-center relative h-96 flex items-center  ">
               <Image
                    src={buscadorBcnd}
                    alt="buscador background"
                    className="absolute inset-0 w-full h-full object-cover bg-contain"
               />

               <div className="relative md:pl-44 md:pr-44 lg:pl-72 lg:pr-72 xl:pl-96 xl:pr-96 text-black h-full w-full  mt-60">
                    <input
                         type="text"
                         placeholder="Buscador"
                         className="w-full rounded-xl pl-12 pr-4 py-4  bg-white border-2 border-black focus:outline-none text-xl text-black placeholder-black::placeholder"
                    />
                    <div className="absolute right-4 md:right-44 lg:right-72 xl:right-96 top-3 p-2 pr-4">
                         <BiSearch
                              size={28}
                              className=""
                              //onClick={handleButtonClick}
                              tabIndex="0"
                         />
                    </div>
               </div>
          </div>
     );
};

export default SearchBar;
