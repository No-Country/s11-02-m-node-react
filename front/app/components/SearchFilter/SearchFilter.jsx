import React, { useState, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import mainRoute from '@/route';
import { useRouter } from 'next/navigation';

const SearchFilter = () => {
     const [searchQuery, setSearchQuery] = useState('');
     const [searchResults, setSearchResults] = useState([]);
     const route = useRouter();
     const searchFilterRef = useRef(null);

     useEffect(() => {
          const fetchData = async () => {
               if (searchQuery) {
                    try {
                         const response = await fetch(`${mainRoute}/products`);
                         if (response.ok) {
                              const data = await response.json();
                              const filteredResults = data.products
                                   .filter((product) =>
                                        product.name
                                             .toLowerCase()
                                             .includes(
                                                  searchQuery.toLowerCase()
                                             )
                                   )
                                   .slice(0, 3);
                              setSearchResults(filteredResults);
                         } else {
                              console.error('Error al buscar productos');
                         }
                    } catch (error) {
                         console.error('Error al buscar productos', error);
                    }
               } else {
                    setSearchResults([]);
               }
          };

          fetchData();
     }, [searchQuery]);

     const handleSearchInputChange = (e) => {
          const query = e.target.value;
          setSearchQuery(query);
     };

     const handleResultClick = (productId) => {
          route.push(`/Product/${productId}`);
     };

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (
                    searchFilterRef.current &&
                    !searchFilterRef.current.contains(event.target)
               ) {
                    setSearchQuery('');
               }
          };
          document.addEventListener('click', handleClickOutside);

          return () => {
               document.removeEventListener('click', handleClickOutside);
          };
     }, []);

     return (
          <div ref={searchFilterRef} className="relative">
               <div className="relative flex items-center">
                    <input
                         type="text"
                         placeholder="Buscador"
                         value={searchQuery}
                         onChange={handleSearchInputChange}
                         className="flex-1 w-1/6 md:w-1/2 lg:w-3/4 xl:w-4/5 rounded-full pl-4 pr-12 py-4 bg-white border-2 border-Fern/green focus:outline-none text-xl text-black placeholder-black::placeholder"
                    />
                    <button className="absolute right-8 h-full">
                         <div className="cursor-pointer">
                              <BiSearch
                                   size={28}
                                   className="cursor-pointer"
                                   tabIndex="0"
                              />
                         </div>
                    </button>
               </div>

               <div className="absolute top-full left-28 w-full">
                    <ul className="z-20">
                         {searchResults.map((product) => (
                              <li
                                   key={product.id}
                                   className=" py-1 max-w-2xl px-4 text-lg bg-gray-300 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:rounded-md active:bg-gray-100 active:scale-95"
                                   onClick={() =>
                                        handleResultClick(product.id)
                                   }>
                                   {product.name}
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default SearchFilter;
