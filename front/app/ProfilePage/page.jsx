'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
     const loggedUser = useSelector((state) => state.user);

     return (
          <div className="bg-neutral-100 shadow-md rounded-lg p-4 md:w-1/2 lg:w-1/3 mx-auto mt-8">
               <div className="mb-4">
                    <h2 className="text-xl font-semibold text-green-700">
                         ¡Hola, {loggedUser.firstName}!
                    </h2>
                    <h4 className="text-gray-500">
                         Aquí encontrarás tu información personal
                    </h4>
               </div>
               <div className="ml-4">
                    <div className="mb-4">
                         <strong className="text-gray-600">
                              Nombre:{' '}
                              <span className="text-black">
                                   {loggedUser.firstName}
                              </span>
                         </strong>
                    </div>
                    <div className="mb-4">
                         <strong className="text-gray-600">
                              Apellido:{' '}
                              <span className="text-black">
                                   {loggedUser.lastName}
                              </span>
                         </strong>
                    </div>
                    <div className="mb-4">
                         <strong className="text-gray-600">
                              Localidad:{' '}
                              <span className="text-black">
                                   {loggedUser.address}
                              </span>
                         </strong>
                    </div>
                    <div className="mb-4">
                         <strong className="text-gray-600">
                              Email:{' '}
                              <span className="text-black">
                                   {loggedUser.email}
                              </span>
                         </strong>
                    </div>
               </div>
               <div className="mb-4 flex justify-around">
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-2">
                         Editar
                    </button>
                    <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 mt-2">
                         Eliminar
                    </button>
               </div>
          </div>
     );
};

export default Profile;
