import React, { useState } from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div className="">
               {/* Botón de hamburguesa */}
               <button
                    className="md:hidden block text-white text-4xl"
                    onClick={toggleMenu}>
                    &#9776;
               </button>

               {/* Menú desplegable */}
               {menuOpen && (
                    <div className="md:hidden z-50 absolute top-8 left-0 mt-10 mr-6 p-4 bg-gray-500 w-screen max-w-full shadow-lg">
                         <ul className="text-white text-2xl text-center">
                              <li className="mb-2">
                                   <Link href="/" onClick={toggleMenu}>
                                        Inicio
                                   </Link>
                              </li>
                              <li className="mb-2">
                                   <Link href="/LoginPage" onClick={toggleMenu}>
                                        Login
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        href="/RegisterPage"
                                        onClick={toggleMenu}>
                                        Register
                                   </Link>
                              </li>
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default HamburgerMenu;
