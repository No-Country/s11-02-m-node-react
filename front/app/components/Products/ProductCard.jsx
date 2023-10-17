import React from 'react';
import Image from 'next/image';

function ProductCard({ product }) {
     return (
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
               <p className="md:text-xl  mb-8 mt-6">{product.name}</p>
               <p className="text-sm md:text-md text-gray-500">
                    Último precio ofertado
               </p>
               <p className="text-xl font-semibold mt-2">{product.price}</p>
          </div>
     );
}

export default ProductCard;
