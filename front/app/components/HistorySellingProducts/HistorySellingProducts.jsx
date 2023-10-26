'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import mainRoute from '@/route';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ChevronLeft } from 'lucide-react';

const HistorySellingProducts = () => {
     const loggedUser = useSelector((state) => state.user);
     const dispatch = useDispatch();

     const [userData, setUserData] = useState(loggedUser);

     useEffect(() => {
          Loading.standard('Cargando...');
          async function fetchUserData() {
               try {
                    const response = await fetch(
                         `${mainRoute}/users/${loggedUser.id}`,
                         {
                              method: 'GET',
                              headers: {
                                   'Content-Type': 'application/json',
                              },
                         }
                    );

                    if (!response.ok) {
                         throw new Error('Error en la solicitud al servidor');
                    }

                    const userData = await response.json();

                    setUserData(userData);
                    dispatch(updateUser(userData));
                    Loading.remove();
               } catch (error) {
                    console.error('Error en la solicitud:', error);
                    Loading.remove();
               }
          }

          fetchUserData();
     }, [loggedUser.id, dispatch]);

     return (
          <div>
               <div className="flex justify-start">
                    <Link href="/ProfilePage">
                         <h4 className="text-lg font-bold my-4 text-Fern/green flex ">
                              {' '}
                              <ChevronLeft />
                              Volver
                         </h4>
                    </Link>
               </div>
               <div className="flex justify-around">
                    <h1 className="text-2xl font-bold mb-8 text-green my-4 text-center lg:text-left">
                         Productos publicados actualmente:
                    </h1>
               </div>

               <div className="flex flex-wrap justify-center text-center -mx-4">
                    {userData.user && userData.user.sellingProducts ? (
                         userData.user.sellingProducts.map((product) => (
                              <div
                                   key={product.id}
                                   className="w-full lg:w-1/2 px-2 mb-4 max-h-42">
                                   <div className="bg-white max-w-l rounded-lg p-4 shadow-md">
                                        <h2 className="text-xl font-semibold">
                                             {product.name}
                                        </h2>
                                        <p className="text-gray-600">
                                             {product.description}
                                        </p>
                                        {product.img && (
                                             <img
                                                  src={product.img[0]}
                                                  alt={product.name}
                                                  className="max-w-xs max-h-40 rounded-lg mx-auto"
                                             />
                                        )}
                                   </div>
                              </div>
                         ))
                    ) : (
                         <p>No hay productos en venta disponibles.</p>
                    )}
               </div>
          </div>
     );
};

export default HistorySellingProducts;
