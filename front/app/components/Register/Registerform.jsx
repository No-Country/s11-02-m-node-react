'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registerform = () => {
     const formik = useFormik({
          initialValues: {
               name: '',
               email: '',
               password: '',
               confirmpass: '',
          },
          validationSchema: Yup.object({
               name: Yup.string()
                    .required('El nombre es obligatorio')
                    .matches(
                         /^[A-Za-z]+$/,
                         'El nombre solo puede contener letras'
                    ),

               email: Yup.string()
                    .email('El email no es válido')
                    .matches(/.*@.*\.com/, 'El email no es válido')
                    .required('El email es obligatorio'),
               password: Yup.string()
                    .required('La contraseña es obligatoria')
                    .min(6, 'La contraseña debe tener 6 carecteres'),
               confirmpass: Yup.string()
                    .oneOf(
                         [Yup.ref('password'), null],
                         'Las contraseñas deben coincidir'
                    )
                    .required('Debe confirmar la contraseña'),
          }),

          onSubmit: () => {
               console.log('enviando');
          },
          validateOnChange: true,
     });

     return (
          <div className="flex justify-center ">
               <div className="w-full max-w-xl">
                    <h2 className="text-3xl font-sans font-bold text-white-800 text-center mb-4">
                         Regístrate!
                    </h2>
                    <div className="bg-indigo-50 rounded-lg shadow-md px-16 py-6">
                         <form action="" onSubmit={formik.handleSubmit}>
                              <div className="mb-10">
                                   <label
                                        htmlFor="name"
                                        className="block text-black text-md font-bold mb-2">
                                        Nombre
                                   </label>
                                   <input
                                        type="text"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="name"
                                        placeholder="Ingrese su nombre"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onClick={formik.handleBlur}
                                   />

                                   {formik.dirty &&
                                   formik.touched.name &&
                                   formik.errors.name ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center">
                                             <p className="text-sm">
                                                  {formik.errors.name}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="email"
                                        className="block text-black text-md font-bold mb-2">
                                        Email
                                   </label>
                                   <input
                                        type="text"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="email"
                                        placeholder="Ingrese su Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onClick={formik.handleBlur}
                                   />

                                   {formik.dirty &&
                                   formik.touched.email &&
                                   formik.errors.email ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1">
                                             <p className=" text-sm">
                                                  {formik.errors.email}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="password"
                                        className="block text-black text-md font-bold mb-2">
                                        Contraseña
                                   </label>
                                   <input
                                        type="password"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="password"
                                        placeholder="Ingrese su contraseña"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onClick={formik.handleBlur}
                                   />

                                   {formik.dirty &&
                                   formik.touched.password &&
                                   formik.errors.password ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1">
                                             <p className=" text-sm">
                                                  {formik.errors.password}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="confirmpass"
                                        className="block text-black text-md font-bold mb-2">
                                        Confirmar Contraseña
                                   </label>
                                   <input
                                        type="password"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="confirmpass"
                                        placeholder="Ingrese su contraseña"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onClick={formik.handleBlur}
                                   />
                                   {formik.dirty &&
                                   formik.touched.confirmpass &&
                                   formik.errors.confirmpass ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1">
                                             <p className=" text-sm">
                                                  {formik.errors.confirmpass}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <input
                                   type="submit"
                                   className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full cursor-pointer"
                                   value="Crear cuenta"
                              />
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Registerform;
