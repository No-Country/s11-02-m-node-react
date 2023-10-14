import React from 'react';
import Image from 'next/image';
import imagen from '../../../public/tierra.png';

function AboutUs() {
     return (
          <div className="bg-Fern/green font-poppins text-Isabelline  p-4 md:p-12 md:pl-28 md:pr-28 rounded-tl-xl rounded-br-xl shadow-md mx-auto justify-center flex items-center">
               <div className="md:flex justify-center ">
                    <div className="md:w-1/2 ">
                         <h2 className="text-4xl  mb-6">Sobre nosotros</h2>
                         <Image
                              src={imagen}
                              alt="Imagen de la empresa"
                              className="w-full h-auto rounded-md md:hidden"
                         />

                         <p className="mb-2 mt-4 text-xl md:text-2xl">
                              En Eco subasta, creemos en un futuro sostenible y
                              en la importancia de reutilizar objetos que aún
                              tienen vida útil. Nuestra plataforma de subastas
                              en línea se ha creado con un propósito claro:
                              incentivar la reutilización de objetos viejos en
                              buen estado, evitando que terminen en contenedores
                              de basura cuando podrían seguir siendo útiles para
                              alguien más.
                         </p>
                    </div>
                    <div className="md:w-1/3  md:ml-10 mt-4 md:mt-0">
                         <Image
                              src={imagen}
                              alt="Imagen de la empresa"
                              className="w-full h-auto rounded-md hidden md:block"
                         />
                    </div>
               </div>
          </div>
     );
}

export default AboutUs;
