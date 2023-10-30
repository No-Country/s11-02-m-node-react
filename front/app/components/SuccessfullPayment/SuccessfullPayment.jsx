import React from 'react';
import Link from 'next/link';

const SuccessfullPayment = () => {
     return (
          <div class="flex items-center justify-center h-screen">
               <div class="border p-4 shadow-2xl rounded-xl">
                    <h4 class="text-center text-Fern/green text-2xl font-semibold tracking-wide">
                         Tu Dinero fue ingresado con éxito
                    </h4>
                    <p class="text-center mt-4">
                         Puede tardar unos minutos en verse reflejado dentro de
                         la web!
                    </p>
                    <Link href="/" class="mt-4 flex justify-center">
                         <button class="bg-Fern/green rounded-3xl px-24 py-2 text-md text-white">
                              Volver al inicio
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default SuccessfullPayment;
