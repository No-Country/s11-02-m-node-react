import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const AuctionedCard = ({ product }) => {
     const formattedNumber = (num) => {
          return num.toLocaleString('es-AR', {
               minimumFractionDigits: 2,
               maximumFractionDigits: 2,
          });
     };

     return (
          <div className="w-full  mb-4">
               <div className="bg-Gunmetal/2 text-white">
                    {product.status === 'ACTIVE' ? (
                         <p className="text-Tea/green">Activo</p>
                    ) : (
                         <p className="text-red-500">Finalizado</p>
                    )}
               </div>
               <div className="bg-white rounded-lg p-4 shadow-md border flex justify-around">
                    <div className="">
                         <img
                              src={product.img[0]}
                              alt={product.name}
                              className="max-w-xs max-h-40 rounded-lg mx-auto m-4"
                         />
                    </div>

                    <div className="text-left ml-2">
                         <h2 className="text-xl font-semibold mt-4">
                              {product.name}
                         </h2>
                         <p className="text-gray-600">{product.description}</p>
                         <div className="text-sm mt-1">
                              Ultimo precio ofertado
                         </div>
                         <div className="font-semibold mt-1">
                              ARS {formattedNumber(product.currentOffer)}
                         </div>
                    </div>

                    <div>
                         <Link href={`/Product/${product.id}`}>
                              <button className="border border-Fern/green rounded-xl px-8 my-12 ml-2">
                                   Ver compra
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default AuctionedCard;
