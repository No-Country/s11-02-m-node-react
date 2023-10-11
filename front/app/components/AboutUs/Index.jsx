import React from 'react';
import Image from 'next/image';
import imagen from '../../../public/reciclaje-123604.jpeg';

function AboutUs() {
     return (
          <div className="bg-gray-200  p-4 md:p-12 md:pl-28 md:pr-28 rounded-md shadow-md mx-auto justify-center flex items-center">
               <div className="md:flex justify-center">
                    <div className="md:w-1/2 ">
                         <h2 className="text-3xl font-semibold mb-10">
                              Sobre Nosotros
                         </h2>
                         <p className="mb-2 text-2xl">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nec odio. Praesent libero. Sed
                              cursus ante dapibus diam. Sed nisi. Nulla quis sem
                              at nibh elementum imperdiet. Duis sagittis ipsum.
                              Praesent mauris. Fusce nec tellus sed augue semper
                              porta. Mauris massa.
                         </p>
                    </div>
                    <div className="  lg:w-1/4 md:ml-10 mt-4 md:mt-0">
                         <Image
                              src={imagen}
                              alt="Imagen de la empresa"
                              className="w-full h-auto rounded-md"
                         />
                    </div>
               </div>
          </div>
     );
}

export default AboutUs;
