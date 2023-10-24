import React from 'react';

const TermsAndConditions = () => {
     return (
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
               <div className="bg-white p-6 rounded-lg shadow-md md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <h1 className="text-2xl font-bold text-Fern/green underline mb-4 flex justify-center">
                         Términos y Condiciones
                    </h1>
                    <p className="text-black">
                         Estos son los términos y condiciones de uso de
                         EcoSubastas. Al utilizar nuestro sitio web, usted
                         acepta cumplir con estos términos y condiciones. Lea
                         detenidamente lo siguiente.
                    </p>
                    <h2 className="text-xl font-semibold mt-4 mb-2">
                         Uso del Sitio
                    </h2>
                    <p className="text-black">
                         Usted acepta utilizar EcoSubastas únicamente con fines
                         legales y de acuerdo con estos términos y condiciones.
                         No está permitido utilizar el sitio de manera que pueda
                         dañar, deshabilitar, sobrecargar o comprometer la
                         seguridad del sitio.
                    </p>
                    <h2 className="text-xl font-semibold mt-4 mb-2">
                         Privacidad
                    </h2>
                    <p className="text-black">
                         La privacidad de nuestros usuarios es importante.
                         Consulte nuestra Política de Privacidad para obtener
                         información sobre cómo recopilamos y utilizamos la
                         información personal.
                    </p>
                    <h2 className="text-xl font-semibold mt-4 mb-2">
                         Cambios en los Términos
                    </h2>
                    <p className="text-black">
                         Nos reservamos el derecho de modificar estos términos y
                         condiciones en cualquier momento. Los cambios serán
                         efectivos una vez publicados en el sitio.
                    </p>
                    <h2 className="text-xl font-semibold mt-4 mb-2">
                         Contacto
                    </h2>
                    <p className="text-black">
                         Si tiene alguna pregunta o inquietud sobre estos
                         términos y condiciones, no dude en ponerse en contacto
                         con nosotros en info@ecosubastas.com.
                    </p>
               </div>
          </div>
     );
};

export default TermsAndConditions;
