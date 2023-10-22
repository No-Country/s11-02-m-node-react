import React, { useState } from 'react';
import Link from 'next/link';
import { GoTriangleDown } from 'react-icons/go';

const MiCuentaMenu = ({ handleLogOut }) => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div className=" flex items-center">
               <button
                    className="text-black px-10 py-2 text-md hidden md:block"
                    onClick={toggleMenu}>
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
                    <div className="hidden md:block z-50 absolute top-8  mt-10 mr-6 p-6 bg-white max-w-full border-2 shadow-lg">
                         <ul className="text-Gunmetal/2 text-sm  ">
                              <li className="mb-3">
                                   <Link href="/ProfilePage">Mi perfil</Link>
                              </li>
                              <li className="mb-3 border-b border-gray-300">
                                   <Link href="/">Configuración</Link>
                              </li>
                              <li className="mb-3">
                                   <Link href="/">Ayuda</Link>
                              </li>
                              <li className="">
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
