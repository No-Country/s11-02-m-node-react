'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Clock4, Lock, User2, Info, ChevronRight } from 'lucide-react';
import mainRoute from '@/route';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const ProfileView = () => {
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
          <div className="min-h-screen flex items-center justify-center">
               <div className="w-full max-w-2xl  rounded-xl shadow-xl">
                    <div className=" bg-Fern/green rounded-t-xl text-center mb-4 flex p-4 shadow-lg">
                         <div className="flex items-center ml-4 my-4">
                              <img
                                   src="/profile.svg"
                                   alt="Logo"
                                   className="w-20 h-22 rounded-full mx-auto border-2 border-black"
                              />

                              <div className="ml-4">
                                   {userData && userData.user && (
                                        <h2 className="text-lg font-bold mt-2 text-white">
                                             {userData.user.firstName}
                                        </h2>
                                   )}
                                   {userData && userData.user && (
                                        <p className="text-md text-white">
                                             {' '}
                                             {userData.user.email}
                                        </p>
                                   )}
                              </div>
                         </div>
                    </div>

                    <div className="text-center">
                         <div className="mb-4">
                              <Link href="ProfilePage/personalInfo">
                                   <div className="flex items-center h-28 justify-around">
                                        <div className="bg-white rounded-full w-12 h-12 mx-4 flex items-center justify-center border border-Fern/green">
                                             <User2
                                                  size={24}
                                                  className="text-Fern/green"
                                             />
                                        </div>
                                        <div className="flex flex-col">
                                             <p className="text-lg">
                                                  Información Personal
                                                  <p>
                                                       Visualiza y edita tus
                                                       datos personales.
                                                  </p>
                                             </p>
                                        </div>
                                        <div className="mx-8 ">
                                             <ChevronRight />
                                        </div>
                                   </div>
                              </Link>
                         </div>
                         <div className="text-center">
                              <div className="mb-4">
                                   <Link href="#">
                                        <div className="flex items-center h-28 justify-around">
                                             <div className="bg-white rounded-full w-12 h-12 mx-4 flex items-center justify-center border border-Fern/green">
                                                  <Clock4
                                                       size={24}
                                                       className="text-Fern/green"
                                                  />
                                             </div>
                                             <div className="flex flex-col">
                                                  <p className="text-lg">
                                                       Historial
                                                       <p>
                                                            Tus productos
                                                            comprados y
                                                            vendidos.
                                                       </p>
                                                  </p>
                                             </div>
                                             <div className="mx-8">
                                                  <ChevronRight />
                                             </div>
                                        </div>
                                   </Link>
                              </div>
                         </div>
                         <div className="text-center">
                              <div className="mb-4">
                                   <Link href="/PrivacyPolicyPage">
                                        <div className="flex items-center h-28 justify-around">
                                             <div className="bg-white rounded-full w-12 h-12 mx-4 flex items-center justify-center border border-Fern/green">
                                                  <Lock
                                                       size={24}
                                                       className="text-Fern/green"
                                                  />
                                             </div>
                                             <div className="flex flex-col">
                                                  <p className="text-lg">
                                                       Seguridad
                                                       <p>
                                                            Preferencias sobre
                                                            el uso de tus datos.
                                                       </p>
                                                  </p>
                                             </div>
                                             <div className="mx-8">
                                                  <ChevronRight />
                                             </div>
                                        </div>
                                   </Link>
                              </div>
                         </div>
                         <div className="text-center">
                              <div className="mb-4">
                                   <Link href="/HelpPage">
                                        <div className="flex items-center h-28 justify-around">
                                             <div className="bg-white rounded-full w-12 h-12 mx-4 flex items-center justify-center border border-Fern/green">
                                                  <Info
                                                       size={24}
                                                       className="text-Fern/green"
                                                  />
                                             </div>
                                             <div className="flex flex-col">
                                                  <p className="text-lg">
                                                       Ayuda
                                                       <p>
                                                            Resolvé tus dudas
                                                            sobre Ecosubastas.
                                                       </p>
                                                  </p>
                                             </div>
                                             <div className="mx-8">
                                                  <ChevronRight />
                                             </div>
                                        </div>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfileView;
