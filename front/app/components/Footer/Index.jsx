import React from 'react';
import Link from 'next/link';

const Footer = () => {
     return (
          <footer className="bg-Isabelline text-fern-green p-4">
               <div className="flex flex-col items-center justify-between sm:flex-row">
                    <img
                         src="ruta_de_la_imagen.jpg"
                         alt="Logo"
                         className="w-12 h-12"
                    />

                    <div className="space-x-4 sm:space-x-0 sm:mt-4 sm:flex text-green-900 mx-4">
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

               <p className="text-center mt-4">
                    Todos los derechos reservados &copy; 2023
               </p>
          </footer>
     );
};

export default Footer;
