import React from 'react';
import Link from 'next/link';

const Footer = () => {
     return (
          <footer className="bg-Isabelline text-fern-green p-4 border-t border-green-700">
               <div className="flex flex-col items-center justify-between sm:flex-row">
                    <img src="/footer.svg" alt="Logo" className="w-24 h-24" />

                    <div className="space-x-4 sm:space-x-0 sm:mt-4 sm:flex text-green-700 mx-4">
                         <Link href="#">
                              <p className="mx-4">Términos y condiciones</p>
                         </Link>
                         <Link href="#">
                              <p className="mx-4">Política de privacidad</p>
                         </Link>
                         <Link href="#">
                              <p className="mx-4">Ayuda</p>
                         </Link>
                    </div>
               </div>

               <div className="border-t border-gray-400 mt-2">
                    <p className="space-x-4 sm:space-x-0 sm:mt-4 text-center mt-4">
                         Todos los derechos reservados &copy; 2023
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
