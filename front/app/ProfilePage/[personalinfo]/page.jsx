'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import mainRoute from '@/route';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const PersonalInfo = () => {
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
          <div className="min-h-screen flex flex-col items-center justify-center">
               <div className="flex justify-start">
                    <Link href="/ProfilePage">
                         <h4 className="text-md font-bold mb-4 text-Fern/green flex ">
                              {' '}
                              <ChevronLeft />
                              Información personal
                         </h4>
                    </Link>
               </div>

               <div className="w-full max-w-2xl rounded-xl shadow-2xl bg-white p-6">
                    <div className="flex items-center">
                         <div className="ml-4">
                              <h3 className="text-lg font-semibold mb-2">
                                   Nombre y apellido
                              </h3>
                              {userData && userData.user && (
                                   <h3 className="text-gray-600 mb-4">
                                        {userData.user.firstName}{' '}
                                        {userData.user.lastName}
                                   </h3>
                              )}
                              <h3 className="text-lg font-semibold mb-2">
                                   Email
                              </h3>
                              {userData && userData.user && (
                                   <h3 className="text-gray-600 mb-4">
                                        {userData.user.email}
                                   </h3>
                              )}
                              <h3 className="text-lg font-semibold mb-2">
                                   Localidad
                              </h3>
                              {userData && userData.user && (
                                   <h3 className="text-gray-600 mb-4">
                                        {userData.user.city}
                                   </h3>
                              )}
                              <Link href="personalInfo/editProfile">
                                   <button className="text-Fern/green font-bold ">
                                        Modificar
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PersonalInfo;
