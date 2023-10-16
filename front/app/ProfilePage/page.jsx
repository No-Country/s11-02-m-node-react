import React from 'react';

const Profile = () => {
     return (
          <div className="bg-white shadow-md rounded-lg p-4 md:w-1/2 lg:w-1/3 mx-auto mt-8">
               <h2 className="text-2xl font-semibold mb-4">
                    Perfil de Usuario
               </h2>
               <div className="mb-4">
                    <strong className="text-gray-600">Nombre:</strong>
               </div>
               <div className="mb-4">
                    <strong className="text-gray-600">Apellido:</strong>{' '}
               </div>
               <div className="mb-4">
                    <strong className="text-gray-600">Localidad:</strong>{' '}
               </div>
               <div className="mb-4">
                    <strong className="text-gray-600">Email:</strong>
               </div>
          </div>
     );
};

export default Profile;
