import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { GoTriangleDown } from 'react-icons/go';

const MiCuentaMenu = ({ handleLogOut }) => {
     const [menuOpen, setMenuOpen] = useState(false);
     const menuCuentaRef = useRef(null);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     const handleButtonClick = (e) => {
          e.stopPropagation();
          toggleMenu();
     };

     useEffect(() => {
          const closeMenuOnClickOutside = (e) => {
               if (menuOpen && !menuCuentaRef.current.contains(e.target)) {
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
               <button
                    className="text-black px-10 py-2 text-md hidden md:block"
                    onClick={handleButtonClick}>
                    <div className="flex items-center">
                         <span>Mi cuenta</span>
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
                         ref={menuCuentaRef}
                         className="hidden md:block z-50 absolute top-8  mt-10 p-2 bg-white  border-2 shadow-lg">
                         <ul className="text-Gunmetal/2 text-sm  ">
                              <li className="mb-3">
                                   <Link
                                        href="/ProfilePage"
                                        onClick={toggleMenu}>
                                        Mi perfil
                                   </Link>
                              </li>
                              {/* <li className="mb-3 border-b border-gray-300">
                                   <Link href="/">Configuración</Link>
                              </li> */}
                              <li className="mb-3">
                                   <Link href="/HelpPage" onClick={toggleMenu}>
                                        Ayuda
                                   </Link>
                              </li>
                              <li className="" onClick={toggleMenu}>
                                   <Link href="/" onClick={handleLogOut}>
                                        Cerrar sesión
                                   </Link>
                              </li>
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default MiCuentaMenu;
