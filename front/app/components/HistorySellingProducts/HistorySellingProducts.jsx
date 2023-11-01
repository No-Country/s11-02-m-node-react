'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import mainRoute from '@/route';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
               <div className="flex justify-center mt-8 mb-12">
                    <Link href="/ProfilePage">
                         <h4 className="text-lg font-bold text-Fern/green flex ">
                              {' '}
                              <ChevronLeft />
                              Volver
                         </h4>
                    </Link>
               </div>

               <div className="flex justify-center mt-4 mb-10">
                    <h4 className="">Productos publicados</h4>
               </div>

               <div className="flex justify-center text-center">
                    <div className="w-full lg:w-1/2 px-2 max-h-42">
                         <div>
                              {userData.user &&
                              userData.user.sellingProducts ? (
                                   userData.user.sellingProducts.map(
                                        (product, index) => (
                                             <div
                                                  key={product.id}
                                                  className="w-full  mb-4">
                                                  <div className="bg-Gunmetal/2 text-white">
                                                       {product.status ===
                                                       'ACTIVE' ? (
                                                            <p className="">
                                                                 Activo
                                                            </p>
                                                       ) : (
                                                            <p>Finalizado</p>
                                                       )}
                                                  </div>
                                                  <div className="bg-white rounded-lg p-4 shadow-md border flex justify-around">
                                                       <div className="">
                                                            <img
                                                                 src={
                                                                      product
                                                                           .img[0]
                                                                 }
                                                                 alt={
                                                                      product.name
                                                                 }
                                                                 className="max-w-xs max-h-40 rounded-lg mx-auto mb-4"
                                                            />
                                                       </div>

                                                       <div className="">
                                                            <h2 className="text-xl font-semibold mt-4">
                                                                 {product.name}
                                                            </h2>
                                                            <p className="text-gray-600">
                                                                 {
                                                                      product.description
                                                                 }
                                                            </p>
                                                       </div>
                                                       <div>
                                                            <Link
                                                                 href={`/Product/${product.id}`}>
                                                                 <button className="border border-Fern/green rounded-xl px-8 my-12">
                                                                      Ver compra
                                                                 </button>
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   )
                              ) : (
                                   <p>No hay productos en venta disponibles.</p>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default HistorySellingProducts;
