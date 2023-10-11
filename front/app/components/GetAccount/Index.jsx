'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import imagen from '../../../public/reciclaje-123604.jpeg';
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
          <div className="relative h-96">
               <Image
                    src={imagen}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-x-0 bottom-0 flex justify-center mb-14 space-x-20">
                    <div className="flex flex-col items-center sm:flex-row sm:space-x-20">
                         <button
                              onClick={handleLogIn}
                              className="border-2 border-blue-500 text-blue-500 font-bold px-24 py-2 rounded-lg hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                              Iniciar Sesión
                         </button>
                         <button
                              onClick={handleRegister}
                              className="bg-blue-500 border-2 border-blue-500 text-white px-24 py-2 rounded-lg hover:bg-blue-600 hover:font-bold">
                              Crear Cuenta
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default GetAccount;
