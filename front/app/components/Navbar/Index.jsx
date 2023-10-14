'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '@/app/store/userSlice';
import { logout } from '@/app/store/authSlice';
import { logOutUser } from '../../utils/logOut';
import HamburgerMenu from './HamburgerMenu';

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
     };
     console.log('usuario', isUserAuthenticated);
     console.log('usuario completo', loggedUser);
     return (
          <nav className="bg-blue-500 p-4">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                         ReutilizApp
                    </div>

                    <div>
                         <HamburgerMenu
                              isUserAuthenticated={isUserAuthenticated}
                              handleLogOut={handleLogOut}
                         />
                         <button
                              className="hidden md:inline text-white text-xl hover:font-bold px-4 py-2 rounded-lg mr-6 underline border-none"
                              onClick={handleInicio}>
                              Inicio
                         </button>
                         {isUserAuthenticated ? (
                              <button
                                   className="hidden md:inline border-2 border-white bg-white text-blue-500 font-bold px-16 py-2 rounded-lg hover:bg-blue-700 hover:text-white"
                                   onClick={handleLogOut}>
                                   Cerrar sesión
                              </button>
                         ) : (
                              <>
                                   <button
                                        className="hidden md:inline border-2 border-white text-white font-bold px-16 py-2 rounded-lg transition duration-300 hover:bg-blue-500 hover:font-black mb-4 sm:mb-0 mr-4"
                                        onClick={handleLogIn}>
                                        Iniciar sesión
                                   </button>
                                   <button
                                        className="hidden md:inline border-2 border-white bg-white text-blue-500 font-bold px-16 py-2 rounded-lg hover:bg-blue-700 hover:text-white"
                                        onClick={handleRegister}>
                                        Crear cuenta
                                   </button>
                              </>
                         )}
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
