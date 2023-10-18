import React from 'react';
import Image from 'next/image';
import { formattedTime } from './formattedTime';

function ProductCard({ product }) {
     const number = parseInt(product.currentOffer, 10); // Convierte el string a un número

     const formattedNumber = number.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
     });
     return (
          <div
               key={product.id}
               className="bg-white border p-2 md:p-8 rounded-2xl shadow-md hover:shadow-lg w-150">
               <div className="w-full">
                    <div className="bg-Tea/green pt-1 pb-1 text-center text-sm md:text-md">
                         {formattedTime(product.endDate)}
                    </div>
                    <div className="w-full h-52  mx-auto">
                         <Image
                              src={product.img[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              width={300} // Especifica el ancho deseado en píxeles
                              height={200}
                         />
                    </div>
               </div>
               <p className="md:text-xl mb-8 mt-6">{product.name}</p>
               <p className="text-sm md:text-md text-gray-500">
                    Último precio ofertado
               </p>
               <p className="text-xl font-semibold mt-2">${formattedNumber}</p>
          </div>
     );
}

export default ProductCard;
