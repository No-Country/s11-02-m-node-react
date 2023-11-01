import React, { useState } from 'react';

const SuccessModal = ({ onClose }) => {
     return (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
               <div className="w-[45%] h-[65%] m-auto bg-Isabelline rounded-xl p-6 text-Fern/green text-center">
                    <img
                         src="https://res.cloudinary.com/dvrmveuzc/image/upload/v1698290105/hbgjzgc603jazmxsjngx.png"
                         alt="Imagen de éxito"
                         className="w-56 h-56 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-4">
                         ¡Subasta realizada con éxito!
                    </h3>
                    <p className="text-lg mb-6">
                         Te avisaremos por email con información del ganador
                         cuando termine el período de subasta. ¡Gracias por
                         participar!
                    </p>
                    <button
                         onClick={onClose}
                         className="bg-Fern/green text-white py-4 px-14 rounded-full hover:bg-green-600 focus:outline-none">
                         Listo
                    </button>
               </div>
          </div>
     );
};

export default SuccessModal;
