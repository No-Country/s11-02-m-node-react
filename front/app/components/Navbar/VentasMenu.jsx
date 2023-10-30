import React, { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import Link from 'next/link';

const VentasMenu = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div className=" flex items-center">
               {/* Botón de hamburguesa */}
               <button
                    className="text-black px-10 py-2 text-md hidden md:block"
                    onClick={toggleMenu}>
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
                    <div className="hidden md:block z-50 absolute top-8 mt-10 mr-2 p-6 bg-white max-w-full border-2 shadow-lg">
                         <ul className="text-Gunmetal/2 text-sm ">
                              <Link href="/AuctionedPage" className="">
                                   <li className="mb-2">Productos Ofertados</li>
                              </Link>
                              <Link href="/ProfilePage/history">
                                   <li className="mb-2">
                                        Productos Publicados
                                   </li>
                              </Link>
                              <Link href="/ProfilePage/purchaseHistory">
                                   <li className="mb-2">Productos Comprados</li>
                              </Link>
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default VentasMenu;
