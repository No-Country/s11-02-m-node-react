import React, { useState, useEffect, useRef } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import Link from 'next/link';

const VentasMenu = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const menuVentasRef = useRef(null);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     const handleButtonClick = (e) => {
          e.stopPropagation();
          toggleMenu();
     };

     useEffect(() => {
          const closeMenuOnClickOutside = (e) => {
               if (menuOpen && !menuVentasRef.current.contains(e.target)) {
                    setMenuOpen(false);
               }
          };

          if (menuOpen) {
               window.addEventListener('click', closeMenuOnClickOutside);
          }

          return () => {
               window.removeEventListener('click', closeMenuOnClickOutside);
          };
     }, [menuOpen]);

     return (
          <div className=" flex items-center justify-center">
               {/* Botón de hamburguesa */}
               <button
                    className="text-black px-8 py-2 text-md hidden md:block"
                    onClick={handleButtonClick}>
                    <div className="flex items-center">
                         <span>Historial</span>
                         <GoTriangleDown
                              className={`ml-2 ${
                                   menuOpen ? 'transform rotate-180' : ''
                              }`}
                         />
                    </div>
               </button>

               {/* Menú desplegable */}
               {menuOpen && (
                    <div
                         ref={menuVentasRef}
                         className="hidden md:block z-50 absolute top-8 mt-10 p-2 bg-white  border-2 shadow-lg">
                         <ul className="text-Gunmetal/2 text-sm ">
                              <li className="mb-3">
                                   <Link
                                        href="/AuctionedPage"
                                        className=""
                                        onClick={toggleMenu}>
                                        Productos Ofertados
                                   </Link>
                              </li>
                              <li className="mb-3">
                                   <Link
                                        href="/ProfilePage/history"
                                        onClick={toggleMenu}>
                                        Productos Publicados
                                   </Link>
                              </li>
                              <li className="mb-3">
                                   <Link
                                        href="/ProfilePage/purchaseHistory"
                                        onClick={toggleMenu}>
                                        Productos Comprados
                                   </Link>
                              </li>
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default VentasMenu;
