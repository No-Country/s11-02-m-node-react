'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
     const router = useRouter();
     const handleInicio = () => {
          router.push('/');
     };
     const handleLogIn = () => {
          router.push('/LoginPage');
     };
     const handleRegister = () => {
          router.push('/RegisterPage');
     };
     return (
          <nav className="bg-blue-500 p-4">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                         ReutilizApp
                    </div>

                    <div>
                         <HamburgerMenu />
                         <button
                              className="hidden md:inline text-white text-xl hover:font-bold px-4 py-2 rounded-lg mr-6 underline border-none"
                              onClick={handleInicio}>
                              Inicio
                         </button>
                         <button
                              className="hidden md:inline border-2 border-white text-white font-bold px-16 py-2 rounded-lg transition duration-300 hover:bg-blue-500 hover:font-black mb-4 sm:mb-0 mr-4"
                              onClick={handleLogIn}>
                              Log In
                         </button>
                         <button
                              className="hidden md:inline border-2 border-white bg-white text-blue-500 font-bold px-16 py-2 rounded-lg hover:bg-blue-700 hover:text-white"
                              onClick={handleRegister}>
                              Register
                         </button>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
