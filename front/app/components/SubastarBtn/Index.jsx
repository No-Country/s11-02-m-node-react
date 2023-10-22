'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const SubastarBtn = () => {
     const router = useRouter();

     const handleRegister = () => {
          router.push('/');
     };
     return (
          <div className="  flex flex-wrap justify-center mt-12 mb-12 font-poppins">
               <button
                    onClick={handleRegister}
                    className="border-2 border-Fern/green bg-Fern/green text-Isabelline px-28 py-1 md:text-2xl text-sm rounded-full m-2">
                    Subastar un producto
               </button>
          </div>
     );
};

export default SubastarBtn;
