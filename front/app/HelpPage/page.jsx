'use client';
import React from 'react';
import Link from 'next/link';

const HelpPage = () => {
     return (
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
               <div className="bg-white p-6 rounded-lg shadow-md md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <h1 className="text-2xl font-bold text-Fern/green underline mb-4 flex justify-center">
                         Ayuda
                    </h1>
                    <p className="text-black">
                         Bienvenido a la página de ayuda de EcoSubastas. Aquí
                         encontrarás información y respuestas a preguntas
                         frecuentes sobre nuestro servicio de subastas
                         ecológicas.
                    </p>
                    <h2 className="text-xl text-black font-semibold mt-4 mb-2">
                         Preguntas Frecuentes
                    </h2>
                    <ul className="list-disc list-inside text-black pl-4">
                         <li className="mb-2">
                              ¿Cómo puedo registrarme en EcoSubastas?
                         </li>
                         <p className="mb-3">
                              Accediendo en el siguiente enlace:{' '}
                              <Link
                                   href="/RegisterPage"
                                   className="text-Fern/green hover:underline">
                                   Registro
                              </Link>{' '}
                              podrás registrarte en nuestra plataforma.{' '}
                         </p>
                         <li className="mb-3">
                              ¿Cómo puedo participar en una subasta?
                         </li>
                         <p className="mb-3">
                              Una vez registrado tendrás acceso a la sección de
                              subastas.
                         </p>
                         <li className="mb-3">Más información del proyecto</li>
                         <p className="mb-3">
                              <Link
                                   href="  https://github.com/No-Country/s11-02-m-node-react"
                                   target="_blank"
                                   className="text-Fern/green hover:underline">
                                   {' '}
                                   Repositorio
                              </Link>
                         </p>
                    </ul>
                    <h2 className="text-xl text-black font-semibold mt-4 mb-2">
                         Contáctanos
                    </h2>
                    <p className="text-black">
                         Si tienes alguna pregunta adicional o necesitas
                         asistencia, no dudes en contactarnos a través de
                         nuestro correo electrónico: info@ecosubastas.com
                    </p>
               </div>
          </div>
     );
};

export default HelpPage;
