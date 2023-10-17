'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonInfo from './ButtonInfo';

function Category() {
     const router = useRouter();
     function onClick(category = '') {
          router.push(`Products/${category}`);
     }
     return (
          <div className="lg:p-16 mt-4 ">
               <ul className="flex flex-col gap-4  flex-wrap w-full">
                    <div className="flex items-center lg:justify-between justify-center gap-8 p-2 ">
                         <h1 className="text-black lg:text-4xl lg:m-0 ">
                              Categorias mas populares
                         </h1>
                         <button className="border-[#6F9F77] border-2 rounded-full w-24 p-2">
                              ver todo
                         </button>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:mt-4 justify-center items-center flex-wrap gap-4 lg:gap-8">
                         <li
                              className="categoryDiv lg:h-[35rem] lg:hover:scale-105"
                              onClick={() => onClick('artes')}>
                              <img
                                   src="/artes.avif"
                                   alt="artes"
                                   className="categoryImg h-[12rem] lg:h-full w-[21rem] lg:w-[20rem]"
                              />
                              <ButtonInfo text="Arte" />
                         </li>
                         <li
                              className="categoryDiv lg:h-[35rem] lg:hover:scale-105"
                              onClick={() => onClick('cartas')}>
                              <img
                                   src="/cartas.avif"
                                   alt="cartas"
                                   className="categoryImg lg:h-full h-[12rem] w-[21rem] lg:w-[20rem]"
                              />
                              <ButtonInfo text="Cartas" />
                         </li>
                         <li
                              className="categoryDiv lg:h-[35rem] lg:hover:scale-105"
                              onClick={() => onClick('consolas')}>
                              <img
                                   src="consolas.avif"
                                   alt="consolas"
                                   className="categoryImg h-[12rem] lg:h-full w-[21rem] lg:w-[20rem]"
                              />
                              <ButtonInfo text="Electrodomésticos" />
                         </li>
                         <li
                              className="categoryDiv lg:h-[35rem] lg:hover:scale-105"
                              onClick={() => onClick('belleza')}>
                              <img
                                   src="/belleza.avif"
                                   alt="libros"
                                   className="categoryImg h-[12rem] lg:h-full w-[21rem] lg:w-[20rem]"
                              />
                              <ButtonInfo text="Belleza" />
                         </li>
                    </div>
               </ul>
          </div>
     );
}

export default Category;
