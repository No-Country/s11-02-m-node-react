'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setInfoUser } from '@/app/store/userSlice';
import mainRoute from '@/route';
import { useRouter } from 'next/navigation';
import { Report } from 'notiflix';
import { getUserInfo } from '@/app/utils/getUserInfo';

const MiSaldo = () => {
     const loggedUser = useSelector((state) => state.user);
     const dispatch = useDispatch();
     const router = useRouter();
     const [saldo, setSaldo] = useState('');
     const [platform, setPlatform] = useState('');
     const formattedNumber = (num) => {
          return num.toLocaleString('es-AR', {
               minimumFractionDigits: 2,
               maximumFractionDigits: 2,
          });
     };

     const handleSaldoChange = (e) => {
          setSaldo(e.target.value);
     };

     const handlePlatformChange = (e) => {
          setPlatform(e.target.value);
     };
     const handleSuccess = async () => {
          const userInfo = await getUserInfo(loggedUser.id);
          if (userInfo) {
               console.log('Información del usuario:', userInfo);
               dispatch(setInfoUser(userInfo));
          }
          router.push('/ProfilePage');
     };

     const handleSubmit = async (e) => {
          e.preventDefault(); // Previene la recarga de la página por defecto
          const userData = {
               amount: parseInt(saldo),
               userId: loggedUser.id,
          };

          try {
               const response = await fetch(
                    `${mainRoute}/stripe/create-payment-intent`,
                    {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(userData),
                    }
               );

               console.log('request', userData);
               if (!response.ok) {
                    throw new Error('Error en la solicitud al backend');
               }

               const data = await response.json();

               console.log(data);

               // Redirige a la página de destino después de un éxito
               window.open(data.paymentLink, '_blank');

               // Llama a Report.success después de una respuesta exitosa
               Report.success(
                    'Tu dinero fue ingresado con éxito ',
                    'Puede tardar unos minutos en verse reflejado dentro de la web!',
                    'Listo',
                    handleSuccess,
                    {
                         width: '500px',
                         height: '600px',
                         svgSize: '200px',
                         fontFamily: 'Poppins',
                         titleFontSize: '24px',
                         messageFontSize: '15px',
                         className: 'display:flex',
                         success: {
                              titleColor: '#517957',
                              buttonBackground: '#517957',
                         },
                    }
               );
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <div className="">
               <article className="mx-auto lg:w-2/5 border-[#6F9F77] border-2 rounded-2xl lg:mt-10 p-6  ">
                    <form
                         className="flex flex-col justify-center "
                         onSubmit={handleSubmit}>
                         <div className="flex flex-col justify-center p-4 gap-2">
                              <h1 className="text-[#1D262B] text-md">
                                   Tu saldo:
                              </h1>
                              <h1 className="text-3xl ml-1">
                                   {loggedUser &&
                                   loggedUser.wallet &&
                                   loggedUser.wallet.amount
                                        ? formattedNumber(
                                               loggedUser.wallet.amount
                                          )
                                        : '0,00'}
                                   ARS
                              </h1>
                              <p className="pt-2 pb-2">Ingreso de dinero</p>
                         </div>
                         <div className="flex flex-col p-5">
                              <p className="text-sm ">Ingresar monto</p>
                              <input
                                   type="number"
                                   name="saldo"
                                   value={saldo}
                                   onChange={handleSaldoChange}
                                   required
                                   placeholder="Ingrese un monto"
                                   className="border-2 border-[#517957] p-3 w-full mt-4 placeholder:text-[#517957] focus:border-green-700"
                                   min={0}
                              />
                              <select
                                   value={platform}
                                   onChange={handlePlatformChange}
                                   className="border-2 border-[#517957] p-3 w-full mt-4 placeholder:text-[#517957] focus:border-green-700 ">
                                   <option value="">
                                        Seleccione su método de ingreso
                                   </option>
                                   <option value="stripe">Stripe</option>
                                   <option disabled value="mercado-pago">
                                        Mercado Pago
                                   </option>
                              </select>

                              <button
                                   type="submit"
                                   className="bg-[#517957] text-white border-2 rounded-full border-[#517957] p-3 w-full mt-4 disabled:opacity-75"
                                   disabled={false}>
                                   Ingresar dinero
                              </button>
                         </div>
                    </form>
               </article>
          </div>
     );
};

export default MiSaldo;
