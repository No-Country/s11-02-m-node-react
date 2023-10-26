'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonInfo from './ButtonInfo';

function Category() {
     const router = useRouter();
     function onClick(category = '') {
          router.push(`ProductsPage/${category}`);
     }
     return (
          <div className="lg:p-16 mt-4 ">
               <ul className="flex flex-col gap-4  flex-wrap w-full">
                    <div className="flex items-center lg:justify-between justify-center gap-8 p-2 ">
                         <h1 className="text-black lg:text-4xl lg:m-0 ">
                              Categorias mas populares
                         </h1>
                         <button
                              onClick={() => router.push(`/HomePage`)}
                              className="border-[#6F9F77] border-2 rounded-full w-24 p-2">
                              ver todo
                         </button>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:mt-4 justify-center items-center flex-wrap gap-6 lg:gap-8">
                         <li
                              className="categoryDiv lg:h-[30rem] lg:hover:scale-105"
                              onClick={() => onClick('arte')}>
                              <img
                                   src="/artes.avif"
                                   alt="artes"
                                   className="categoryImg h-[12rem] lg:h-full w-[14rem] lg:w-[18rem]"
                              />
                              <ButtonInfo text="Arte" />
                         </li>
                         <li
                              className="categoryDiv lg:h-[30rem] lg:hover:scale-105"
                              onClick={() => onClick('cartas')}>
                              <img
                                   src="/cartas.avif"
                                   alt="cartas"
                                   className="categoryImg lg:h-full h-[12rem] w-[21rem] lg:w-[18rem]"
                              />
                              <ButtonInfo text="Cartas" />
                         </li>
                         <li
                              className="categoryDiv lg:h-[30rem] lg:hover:scale-105"
                              onClick={() => onClick('electrodomesticos')}>
                              <img
                                   src="consolas.avif"
                                   alt="consolas"
                                   className="categoryImg h-[12rem] lg:h-full w-[16rem] lg:w-[18rem]"
                              />
                              <ButtonInfo text="Electrodomésticos" />
                         </li>
                         <li
                              className="categoryDiv lg:h-[30rem] lg:hover:scale-105"
                              onClick={() => onClick('belleza')}>
                              <img
                                   src="/belleza.avif"
                                   alt="libros"
                                   className="categoryImg h-[12rem] lg:h-full w-[12rem] lg:w-[18rem]"
                              />
                              <ButtonInfo text="Belleza" />
                         </li>
                    </div>
               </ul>
          </div>
     );
}

export default Category;
