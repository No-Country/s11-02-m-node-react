'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const SubastarBtn = () => {
     const router = useRouter();
     const isUserAuthenticated = useSelector(
          (state) => state.auth.isUserAuthenticated
     );
     const handleRegister = () => {
          router.push('/SubastarPage');
     };
     return (
          <div className="  flex flex-wrap justify-center mt-12 mb-12 font-poppins">
               <button
                    disabled={!isUserAuthenticated}
                    onClick={handleRegister}
                    className={`border-2 border-Fern/green bg-Fern/green text-Isabelline px-28 py-1 md:text-2xl text-sm rounded-full m-2 ${
                         !isUserAuthenticated &&
                         'cursor-not-allowed opacity-60 hover:cursor-not-allowed'
                    }`}>
                    Subastar un producto
               </button>
          </div>
     );
};

export default SubastarBtn;
