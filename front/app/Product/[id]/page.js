'use client';
import React, { useEffect, useState } from 'react';
import { getProduct } from '@/app/utils/getProducts';
import { formattedTime } from './../../components/Products/formattedTime';

function Product({ params }) {
     const [product, setProduct] = useState({});
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await getProduct(params.id);
                    setProduct(data);
               } catch (error) {
                    console.error('Error al obtener productos', error);
               }
          };

          fetchData();
     }, []);
     const number = parseInt(product.currentOffer, 10); // Convierte el string a un número
     const formattedNumber = number.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
     });

     return (
          <main className="mt-20 mx-28">
               <section className="flex justify-center items-center gap-20">
                    <article className="flex flex-col justify-center w-full">
                         <h1 className="text-2xl">{product.name}</h1>
                         <div>
                              <img
                                   src={product.img}
                                   alt={product.name}
                                   className=" object-cover"
                              />
                              <div>corazon</div>
                              <div>numero</div>
                         </div>
                         <h2>Descripción</h2>
                         <p>{product.description}</p>
                         <ul className="flex gap-6">
                              <div>
                                   <li>Marca</li>
                                   <li>Color</li>
                                   <li>Tipo de objeto</li>
                                   <li>Estado</li>
                              </div>
                              <div>
                                   <li>-</li>
                                   <li>-</li>
                                   <li>-</li>
                                   <li>-</li>
                              </div>
                         </ul>
                    </article>
                    <article className="w-full">
                         <h1>Cierra en {formattedTime(product.endDate)}</h1>
                         <div>
                              <h1>${formattedNumber}</h1>
                              <p>Actual Precio subastado</p>
                              <ul className="flex">
                                   <li>$</li>
                                   <li>$</li>
                                   <li>$</li>
                              </ul>
                              <input
                                   type="text"
                                   placeholder="Establecer otro precio..."
                              />
                              <div>
                                   <button>Subastar</button>
                                   <button>Subastar precio máximo</button>
                              </div>
                         </div>
                    </article>
               </section>
          </main>
     );
}

export default Product;
