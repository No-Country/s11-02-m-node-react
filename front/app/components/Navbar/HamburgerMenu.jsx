import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const HamburgerMenu = ({ isUserAuthenticated, handleLogOut }) => {
     const [menuOpen, setMenuOpen] = useState(false);
     const menuRef = useRef(null);

     const toggleMenu = () => {
          console.log('click', menuOpen);
          setMenuOpen(!menuOpen);
     };

     const handleButtonClick = (e) => {
          e.stopPropagation();
          toggleMenu();
     };

     useEffect(() => {
          const closeMenuOnClickOutside = (e) => {
               if (menuOpen && !menuRef.current.contains(e.target)) {
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
          <div className=" flex items-center">
               {/* Botón de hamburguesa */}
               <button
                    className="md:hidden text-black text-4xl flex items-center"
                    onClick={handleButtonClick}>
                    &#9776;
               </button>

               {/* Menú desplegable */}
               {menuOpen && (
                    <div
                         ref={menuRef}
                         className="md:hidden z-50 absolute top-8 left-0 mt-10 mr-6 p-4 bg-gray-500 w-screen max-w-full shadow-lg">
                         <ul className="text-white text-2xl text-center">
                              <li className="mb-2">
                                   <Link href="/" onClick={toggleMenu}>
                                        Inicio
                                   </Link>
                              </li>
                              <li className="mb-2">
                                   <Link href="/HomePage" onClick={toggleMenu}>
                                        Subastas
                                   </Link>
                              </li>
                              {isUserAuthenticated ? (
                                   <>
                                        <li className="mb-2">
                                             <Link
                                                  href="/ProfilePage"
                                                  onClick={toggleMenu}>
                                                  Mi Perfil
                                             </Link>
                                        </li>
                                        <li className="mb-2">
                                             <Link
                                                  href="/SaldoPage"
                                                  onClick={toggleMenu}>
                                                  Mi saldo
                                             </Link>
                                        </li>
                                        <li className="mb-2">
                                             <Link
                                                  href="/"
                                                  onClick={handleLogOut}>
                                                  Cerrar sesión
                                             </Link>
                                        </li>
                                   </>
                              ) : (
                                   <>
                                        <li className="mb-2">
                                             <Link
                                                  href="/LoginPage"
                                                  onClick={toggleMenu}>
                                                  Iniciar sesión
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/RegisterPage"
                                                  onClick={toggleMenu}>
                                                  Crear cuenta
                                             </Link>
                                        </li>
                                   </>
                              )}
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default HamburgerMenu;
