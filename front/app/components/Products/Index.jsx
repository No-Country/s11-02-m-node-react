import React from 'react';
import Image from 'next/image';
import { products } from './productos';

function Products() {
     return (
          <div className="bg-white p-4 md:pb-20 md:pt-20 md:pl-24 md:pr-24 rounded-md shadow-md">
               <h2 className="text-xl md:text-3xl mt-4 mb-4 md:mb-16">
                    Productos en subasta
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4   md:gap-28">
                    {products.map((product) => (
                         <div
                              key={product.id}
                              className="bg-white border p-2 md:p-8 rounded-2xl shadow-md hover:shadow-lg w-150 ">
                              <div>
                                   <div className="bg-Tea/green pt-1 pb-1 text-center text-sm md:text-md">
                                        2 días 15:27:09
                                   </div>
                                   <Image
                                        src={product.image}
                                        alt={product.name}
                                        className=" mx-auto w-full object-cover mb-2"
                                   />
                              </div>
                              <p className="md:text-3xl  mb-8 mt-6">
                                   {product.name}
                              </p>
                              <p className="text-sm md:text-md text-gray-500">
                                   Último precio ofertado
                              </p>
                              <p className="text-xl font-semibold mt-2">
                                   {product.price}
                              </p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Products;
