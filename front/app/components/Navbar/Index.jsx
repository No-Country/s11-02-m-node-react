'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '@/app/store/userSlice';
import { logout } from '@/app/store/authSlice';
import { logOutUser } from '../../utils/logOut';
import HamburgerMenu from './HamburgerMenu';
import MiCuentaMenu from './MiCuentaMenu';
import ComprasMenu from './ComprasMenu';
import VentasMenu from './VentasMenu';
import ecoLogo from '@/public/ecoLogo.png';

const Navbar = () => {
     const router = useRouter();
     const dispatch = useDispatch();
     const loggedUser = useSelector((state) => state.user);
     const isUserAuthenticated = useSelector(
          (state) => state.auth.isUserAuthenticated
     );
     const handleInicio = () => {
          router.push('/');
     };
     const handleHome = () => {
          router.push('/HomePage');
     };
     const handleLogIn = () => {
          router.push('/LoginPage');
     };
     const handleRegister = () => {
          router.push('/RegisterPage');
     };
     const handleLogOut = () => {
          logOutUser();
          dispatch(setUser(null));
          dispatch(logout());
          router.push('/');
          localStorage.clear();
          console.log('hola');
     };
     console.log('usuario', isUserAuthenticated);
     console.log('usuario completo', loggedUser);
     return (
          <nav className="bg-Isabelline font-poppins p-4 flex items-center shadow-2xl">
               <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                         <Image
                              src={ecoLogo}
                              alt="EcoSubasta logo"
                              className=" md:w-26 md:h-26 object-cover hover:cursor-pointer"
                              onClick={handleInicio}
                         />
                    </div>
                    <div className="flex items-center justify-center">
                         <HamburgerMenu
                              isUserAuthenticated={isUserAuthenticated}
                              handleLogOut={handleLogOut}
                         />

                         {isUserAuthenticated ? (
                              <div className="flex flex-row">
                                   <Link
                                        className=" text-Gunmetal/2  px-10 py-2 text-md  hover:bg-green "
                                        href={'/HomePage'}>
                                        Subastas
                                   </Link>
                                   <ComprasMenu />
                                   <VentasMenu />
                                   <MiCuentaMenu handleLogOut={handleLogOut} />
                              </div>
                         ) : (
                              <div className="flex items-center justify-center text-md">
                                   <button
                                        className="hidden md:inline text-Gunmetal/2  px-10 py-2 text-xl rounded-full hover:bg-green "
                                        onClick={handleHome}>
                                        Subastas
                                   </button>
                                   <span className="vertical-bar hidden md:inline"></span>
                                   <button
                                        className="hidden md:inline text-Gunmetal/2  px-10 py-1 text-xl rounded-full hover:bg-green "
                                        onClick={handleRegister}>
                                        Registrarse
                                   </button>
                                   <button
                                        className="hidden md:inline border-2  bg-Fern/green text-Isabelline  px-10 py-1 text-xl rounded-full mb-4 sm:mb-0 mr-4"
                                        onClick={handleLogIn}>
                                        Iniciar sesión
                                   </button>
                              </div>
                         )}
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
