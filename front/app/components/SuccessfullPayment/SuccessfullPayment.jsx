'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setInfoUser } from '@/app/store/userSlice';
import { useRouter } from 'next/navigation';
import { getUserInfo } from '@/app/utils/getUserInfo';

const SuccessfullPayment = () => {
     const router = useRouter();
     const dispatch = useDispatch();
     const loggedUser = useSelector((state) => state.user);
     const handleSuccess = async () => {
          const userInfo = await getUserInfo(loggedUser.id);
          if (userInfo) {
               console.log('Información del usuario:', userInfo);
               dispatch(setInfoUser(userInfo));
          }
          router.push('/');
     };

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
                    <div class="flex justify-center my-4">
                         <button
                              onClick={handleSuccess}
                              class="bg-Fern/green rounded-3xl px-4 md:px-24 py-2 text-sm md:text-md text-white transform hover:scale-105 transition duration-300 ease-in-out">
                              Volver al inicio
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default SuccessfullPayment;
