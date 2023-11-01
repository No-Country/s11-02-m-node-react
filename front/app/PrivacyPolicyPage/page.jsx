'use client';
import React from 'react';

const PrivacyPolicyPage = () => {
     return (
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
               <div className="bg-white p-6 rounded-lg shadow-md md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <h1 className="text-2xl font-bold text-Fern/green underline mb-4 flex justify-center">
                         Política de Privacidad
                    </h1>
                    <p className="text-black">
                         En EcoSubastas, nos tomamos muy en serio la privacidad
                         de nuestros usuarios. A continuación, detallamos
                         nuestra política de privacidad para garantizar la
                         seguridad y protección de sus datos personales:
                    </p>
                    <h2 className="text-xl font-semibold text-black mt-4 mb-2">
                         Recopilación de Información
                    </h2>
                    <p className="text-black">
                         EcoSubastas recopila información personal limitada,
                         como su nombre, dirección de correo electrónico y
                         detalles de contacto, únicamente con fines de registro
                         y autenticación.
                    </p>
                    <h2 className="text-xl font-semibold text-Fern/black mt-4 mb-2">
                         Uso de la Información
                    </h2>
                    <p className="text-black">
                         La información que recopilamos se utiliza
                         exclusivamente para brindarle acceso a nuestras
                         subastas ecológicas y para garantizar una experiencia
                         segura y personalizada en nuestra plataforma.
                    </p>
                    <h2 className="text-xl font-semibold text-Fern/black mt-4 mb-2">
                         Seguridad de Datos
                    </h2>
                    <p className="text-black">
                         Implementamos medidas de seguridad para proteger sus
                         datos personales y asegurarnos de que no sean
                         compartidos o utilizados de manera no autorizada.
                    </p>
                    <h2 className="text-xl font-semibold text-Fern/black mt-4 mb-2">
                         Contacto
                    </h2>
                    <p className="text-black">
                         Si tiene alguna pregunta o inquietud relacionada con su
                         privacidad en EcoSubastas, no dude en ponerse en
                         contacto con nosotros en info@ecosubastas.com.
                    </p>
               </div>
          </div>
     );
};

export default PrivacyPolicyPage;
