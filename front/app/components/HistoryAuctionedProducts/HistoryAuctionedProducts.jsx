'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import mainRoute from '@/route';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ChevronLeft } from 'lucide-react';
import AuctionedCard from './AuctionedCard';
import Link from 'next/link';

const HistoryAuctionedProducts = () => {
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
                    <h4 className="">Productos ofertados</h4>
               </div>

               <div className="flex justify-center text-center">
                    <div className="w-full lg:w-1/2 px-2 max-h-42">
                         <div>
                              {userData.user && userData.user.buyingProducts ? (
                                   userData.user.buyingProducts.map(
                                        (product, index) => (
                                             <AuctionedCard
                                                  product={product}
                                                  key={index}
                                             />
                                        )
                                   )
                              ) : (
                                   <p>
                                        No hay productos ofertados disponibles.
                                   </p>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default HistoryAuctionedProducts;
