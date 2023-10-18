'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '@/app/store/authSlice';
import { setUser } from '@/app/store/userSlice';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import mainRoute from '../../../route';

const Loginform = () => {
     const dispatch = useDispatch();
     const router = useRouter();
     const formik = useFormik({
          initialValues: {
               email: '',
               password: '',
          },
          validationSchema: Yup.object({
               email: Yup.string()
                    .email('El email no es válido')
                    .matches(/.*@.*\.com/, 'El email no es válido')
                    .required('El email es obligatorio'),
               password: Yup.string()
                    .required('La contraseña es obligatoria')
                    .min(6, 'La contraseña debe tener 6 carecteres'),
          }),

          // 'http://localhost:3001/auth/local/signin'

          onSubmit: async (values) => {
               const { ...userData } = values;
               try {
                    const response = await fetch(
                         `${mainRoute}/auth/local/signin`,
                         {
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json',
                              },

                              body: JSON.stringify(userData),
                         }
                    );
                    if (!response.ok) {
                         throw new Error('Error en la solicitud al backend');
                    }
                    const data = await response.json();

                    //
                    localStorage.setItem(
                         'access_token',
                         data.tokens.access_token
                    );

                    dispatch(login());
                    dispatch(setUser(data.user));
                    //console.log('data!!', data);

                    toast.success('Inicio de sesión exitoso', {
                         position: 'bottom-right',
                         autoClose: 3000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                    });
                    router.push('/');
               } catch (error) {
                    console.log(error);
                    toast.error('Inicio de sesión incorrecto', {
                         position: 'bottom-right',
                         autoClose: 3000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                    });
               }
          },
          validateOnChange: true,
     });

     return (
          <div className="flex justify-center mt-10 md:mt-20">
               <div className="w-full max-w-md">
                    <div className="bg-Isabelline rounded-lg shadow-xl p-6">
                         <h2 className="text-xl font-sans text-white-800 text-center mb-4">
                              Iniciar sesión
                         </h2>
                         <form
                              action=""
                              onSubmit={formik.handleSubmit}
                              className="space-y-6">
                              <div className="mb-10 ">
                                   <label
                                        htmlFor="email"
                                        className="block text-black text-md mb-2">
                                        Email
                                   </label>
                                   <input
                                        type="text"
                                        className="border border-gray-300 py-3 px-4 rounded-lg w-full focus:border-Fern/green outline-none focus:ring-1 focus:ring-Fern/green text-black"
                                        id="email"
                                        placeholder="Ingrese su Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.email &&
                                   formik.errors.email ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-2 py-1 absolute">
                                             <p className="text-sm">
                                                  {formik.errors.email}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10 ">
                                   <label
                                        htmlFor="password"
                                        className="block text-black text-md mb-2">
                                        Contraseña
                                   </label>
                                   <input
                                        type="password"
                                        className="border border-gray-300 py-3 px-4 rounded-lg w-full focus:border-Fern/green outline-none focus:ring-1 focus:ring-Fern/green text-black"
                                        id="password"
                                        placeholder="Ingrese su contraseña"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.password &&
                                   formik.errors.password ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-2 py-1 absolute">
                                             <p className="text-sm">
                                                  {formik.errors.password}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>
                              <div>
                                   <input
                                        type="submit"
                                        className={`bg-Fern/green hover:bg-green text-white font-bold py-2 px-4 rounded-full w-full cursor-pointer mt-6  ease-in-out duration-300 ${
                                             (!formik.isValid ||
                                                  !formik.dirty) &&
                                             'bg-green cursor-not-allowed opacity-60 pointer-events-none hover:cursor-not-allowed'
                                        }`}
                                        value="Iniciar sesión"
                                        disabled={
                                             !formik.isValid || !formik.dirty
                                        }
                                   />
                              </div>

                              <div className="flex justify-center mt-4 text-base">
                                   ¿No tienes cuenta?
                                   <Link href="RegisterPage">
                                        <span className=" font-medium cursor-pointer text-base hover:text-Fern/green ml-1">
                                             Regístrate
                                        </span>
                                   </Link>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Loginform;
