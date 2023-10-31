import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formattedTime } from './formattedTime';

function ProductCard({ product, className }) {
     const number = parseInt(product.currentOffer, 10); // Convierte el string a un número
     const router = useRouter();
     const formattedNumber = number.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
     });
     const handleClick = () => {
          router.push(`/Product/${product.id}`);
     };

     return (
          <div
               onClick={handleClick}
               key={product.id}
               className={`bg-white border cursor-pointer p-2 md:p-8 rounded-2xl shadow-md hover:shadow-lg w-64 md:w-150 ${className}`}
               style={{ height: '450px' }} // Establece una altura fija en píxeles
          >
               <div className="bg-Tea/green pt-1 pb-1 text-center text-sm md:text-md">
                    {formattedTime(product.endDate)}
               </div>
               <div className="w-full h-52 mx-auto">
                    <Image
                         src={product.img[0]}
                         alt={product.name}
                         className="w-full h-full object-cover"
                         width={300} // Especifica el ancho deseado en píxeles
                         height={200}
                    />
               </div>
               <p className="md:text-lg mb-8 mt-6 text-overflow-ellipsis line-clamp-2">
                    {product.name}
               </p>
               <p className="text-sm md:text-md text-gray-500">
                    Último precio ofertado
               </p>
               <p className="text-xl font-semibold mt-2">
                    ${formattedNumber === '0' ? '10.200' : formattedNumber}
               </p>
          </div>
     );
}

export default ProductCard;
