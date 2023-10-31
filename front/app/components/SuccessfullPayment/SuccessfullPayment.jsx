import React from 'react';
import Link from 'next/link';

const SuccessfullPayment = () => {
     return (
          <div class="flex mt-20 justify-center ">
               <div class="p-8 px-4 md:px-20 shadow-2xl rounded-3xl">
                    <div class="flex justify-center mb-4">
                         <img
                              src="https://res.cloudinary.com/dvrmveuzc/image/upload/v1698758726/ptmtkrasu3wxwdumm8ug.png"
                              alt="payment"
                         />
                    </div>

                    <h4 class="text-center text-Fern/green text-xl md:text-2xl font-semibold tracking-wide">
                         Tu Dinero fue ingresado con éxito
                    </h4>
                    <p class="text-center mt-4">
                         Puede tardar unos minutos en verse reflejado dentro de
                         la web!
                    </p>
                    <Link href="/" class="flex justify-center my-4">
                         <button class="bg-Fern/green rounded-3xl px-4 md:px-24 py-2 text-sm md:text-md text-white transform hover:scale-105 transition duration-300 ease-in-out">
                              Volver al inicio
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default SuccessfullPayment;
