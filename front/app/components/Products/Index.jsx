import React from 'react';
import Image from 'next/image';
import { products } from './productos';

function Products() {
     return (
          <div className="bg-gray-200 p-4 md:pb-20 md:pt-20 md:pl-24 md:pr-24 rounded-md shadow-md">
               <h2 className="text-3xl font-semibold mb-16">
                    Productos destacados
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28">
                    {products.map((product) => (
                         <div
                              key={product.id}
                              className="bg-white border p-8 rounded-md shadow-md hover:shadow-lg w-150 ">
                              <Image
                                   src={product.image}
                                   alt={product.name}
                                   className=" mx-auto w-1/2 md:w-52 md:h-52 object-cover mb-2"
                              />
                              <p className="text-xl font-semibold mb-6 mt-6">
                                   {product.name}
                              </p>
                              <p className="text-sm text-gray-500 mb-2">
                                   {product.description}
                              </p>
                              <p className="text-xl font-semibold mt-3">
                                   {product.price}
                              </p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Products;
