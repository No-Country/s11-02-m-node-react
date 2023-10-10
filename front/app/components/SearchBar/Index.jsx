import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
     return (
          <div className="bg-gray-200 p-4 rounded-md text-center">
               <h3 className="text-3xl font-semibold mt-5 mb-5 md:mt-10 md:mb-20">
                    Buscador
               </h3>
               <div className="relative md:pl-44 md:pr-44 lg:pl-72 lg:pr-72 xl:pl-96 xl:pr-96 text-black">
                    <input
                         type="text"
                         placeholder="Buscador"
                         className="w-full rounded-xl pl-12 pr-4 py-4 mb-28 bg-white border-2 border-black focus:outline-none text-xl text-black placeholder-black::placeholder"
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
