'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
//import Image from 'next/image';
//import imagen from '../../../public/reciclaje-123604.jpeg';
//import fondo from '@/public/fondo.jpeg';

const GetAccount = () => {
     const router = useRouter();
     const handleLogIn = () => {
          router.push('/LoginPage');
     };
     const handleRegister = () => {
          router.push('/RegisterPage');
     };
     return (
          <div className="  flex flex-wrap justify-center mt-12 mb-12 font-poppins">
               <button
                    onClick={handleLogIn}
                    className="border-2 border-Fern/green bg-Fern/green text-Isabelline px-8 py-4 md:text-lg text-sm rounded-full m-2">
                    Iniciar Sesión
               </button>
               <button
                    onClick={handleRegister}
                    className="border-2 border-Fern/green text-Fern/green px-8 py-4 md:text-lg text-sm rounded-full hover:bg-green m-2">
                    Registrarse
               </button>
          </div>
     );
};

export default GetAccount;
