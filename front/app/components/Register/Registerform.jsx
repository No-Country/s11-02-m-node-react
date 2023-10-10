'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import isEmpty from 'lodash/isEmpty';

const Registerform = () => {
     const formik = useFormik({
          initialValues: {
               firstname: '',
               lastname: '',
               address: '',
               email: '',
               password: '',
               confirmpass: '',
          },
          validationSchema: Yup.object({
               firstname: Yup.string()
                    .required('El nombre es obligatorio')
                    .matches(
                         /^[A-Za-z]+$/,
                         'El nombre sólo puede contener letras'
                    ),

               lastname: Yup.string()
                    .required('El apellido es obligatorio')
                    .matches(
                         /^[A-Za-z]+$/,
                         'El apellido sólo puede contener letras'
                    ),

               address: Yup.string()
                    .required('La dirección es obligatorio')
                    .matches(/^[A-Za-z0-9\s]+$/, 'Caracteres inválidos'),

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

          onSubmit: (values, action) => {
               console.log(formik.values);
               console.log(values);
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
                                        htmlFor="firstname"
                                        className="block text-black text-md font-bold mb-2">
                                        Nombre
                                   </label>
                                   <input
                                        type="text"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="firstname"
                                        placeholder="Ingrese su nombre"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.firstname &&
                                   formik.errors.firstname ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.firstname}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="lastname"
                                        className="block text-black text-md font-bold mb-2">
                                        Apellido
                                   </label>
                                   <input
                                        type="text"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="lastname"
                                        placeholder="Ingrese su apellido"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.lastname &&
                                   formik.errors.lastname ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.lastname}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="address"
                                        className="block text-black text-md font-bold mb-2">
                                        Dirección
                                   </label>
                                   <input
                                        type="text"
                                        className="border border-gray-300 py-3 px-8 rounded-lg focus:border-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 text-black"
                                        id="address"
                                        placeholder="Ingrese su dirección"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.address &&
                                   formik.errors.address ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.address}
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
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.email &&
                                   formik.errors.email ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute">
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
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.password &&
                                   formik.errors.password ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute">
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
                                        onBlur={formik.handleBlur}
                                   />
                                   {formik.touched.confirmpass &&
                                   formik.errors.confirmpass ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute">
                                             <p className=" text-sm">
                                                  {formik.errors.confirmpass}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>
                              <Link href="/LoginPage">
                                   <input
                                        type="submit"
                                        className={`bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full cursor-pointer mt-4 ease-in-out duration-300 ${
                                             (!formik.isValid ||
                                                  !formik.dirty) &&
                                             'bg-gray-400 cursor-not-allowed opacity-60 pointer-events-none hover:cursor-not-allowed'
                                        }`}
                                        value="Crear cuenta"
                                        disabled={
                                             !formik.isValid || !formik.dirty
                                        }
                                   />
                              </Link>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Registerform;
