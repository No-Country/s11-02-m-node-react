import React from 'react';
import Link from 'next/link';

const Footer = () => {
     return (
          <footer className="bg-Isabelline text-fern-green p-4 border-t border-green-700 mt-4">
               <div className="container mx-auto">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                         <img
                              src="/footer.svg"
                              alt="Logo"
                              className="w-24 h-24"
                         />

                         <div className="space-x-4 sm:space-x-0 sm:mt-4 sm:flex text-green-700 mx-4">
                              <Link href="/TermsAndConditionsPage">
                                   <p className="mx-4">
                                        Términos y condiciones
                                   </p>
                              </Link>
                              <Link href="/PrivacyPolicyPage">
                                   <p className="mx-4">
                                        Política de privacidad
                                   </p>
                              </Link>
                              <Link href="/HelpPage">
                                   <p className="mx-4">Ayuda</p>
                              </Link>
                         </div>
                    </div>

                    <div className="border-t border-gray-400 mt-2">
                         <p className="sm:space-x-4 sm:mt-0 text-center mt-4">
                              Todos los derechos reservados &copy; 2023
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
