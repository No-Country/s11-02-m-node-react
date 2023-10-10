'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function Category() {
     const router = useRouter();
     function onClick(category = '') {
          router.push(`Products/${category}`);
     }
     return (
          <div className=" bg-gray-200 p-16  ">
               <ul className="flex flex-col items-center justify-center gap-10 text-xl flex-wrap">
                    <h1 className="text-black text-4xl  ">Categorias</h1>
                    <div className="flex flex-row gap-10 justify-center items-center flex-wrap">
                         <li
                              className="categoryDiv"
                              onClick={() => onClick('Electro')}>
                              Electro
                         </li>
                         <li
                              className="categoryDiv"
                              onClick={() => onClick('Deco')}>
                              Deco
                         </li>
                         <li
                              className="categoryDiv"
                              onClick={() => onClick('Ropa')}>
                              Ropa
                         </li>
                    </div>
                    <div className="flex flex-row gap-10 justify-center items-center flex-wrap">
                         <li
                              className="categoryDiv"
                              onClick={() => onClick('Muebles')}>
                              Muebles
                         </li>
                         <li
                              className="categoryDiv "
                              onClick={() => onClick('Belleza')}>
                              Belleza
                         </li>
                         <li
                              className="categoryDiv "
                              onClick={() => onClick('Otros')}>
                              Otros...
                         </li>
                    </div>
               </ul>
          </div>
     );
}

export default Category;
