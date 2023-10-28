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
          <div ref={searchFilterRef}>
               <input
                    type="text"
                    placeholder="Buscador"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full rounded-xl pl-12 pr-4 py-4 bg-white border-2 border-black focus:outline-none text-xl text-black placeholder-black::placeholder"
               />
               <button className="absolute right-4 md:right-40 lg:right-72 xl:right-90 top-5">
                    <div className="cursor-pointer">
                         <BiSearch
                              size={28}
                              className="cursor-pointer"
                              tabIndex="0"
                         />
                    </div>
               </button>
               <div className="absolute w-full ">
                    <ul className="w-full z-20">
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
