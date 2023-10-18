'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import mainRoute from '@/route';

const Registerform = () => {
     const router = useRouter();
     const formik = useFormik({
          initialValues: {
               firstName: '',
               lastName: '',
               address: '',
               email: '',
               password: '',
               confirmpass: '',
          },
          validationSchema: Yup.object({
               firstName: Yup.string()
                    .required('El nombre es obligatorio')
                    .matches(
                         /^[A-Za-z]+$/,
                         'El nombre sólo puede contener letras'
                    ),

               lastName: Yup.string()
                    .required('El apellido es obligatorio')
                    .matches(
                         /^[A-Za-z]+$/,
                         'El apellido sólo puede contener letras'
                    ),

               address: Yup.string().required('La dirección es obligatoria'),

               city: Yup.string().required('La localidad es obligatoria'),

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

          onSubmit: async (values) => {
               const { confirmpass, ...userData } = values;
               try {
                    const response = await fetch(
                         `${mainRoute}/auth/local/signup`,
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

                    console.log(data);

                    toast.success('Usuario creado correctamente', {
                         position: 'bottom-right',
                         autoClose: 3000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                    });
                    router.push('/LoginPage');
               } catch (error) {
                    console.log(error);
                    toast.error('El mail ya fue registrado', {
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
               <div className="w-full max-w-xl">

                    <div className="bg-neutral-100 rounded-lg shadow-2xl px-6 py-8 ">
                         <h2 className="text-xl font-sans text-white-800 text-center mb-4">
                              Registro
                         </h2>
                         <form action="" onSubmit={formik.handleSubmit}>
                              <div className="mb-10">
                                   <label
                                        htmlFor="firstName"
                                        className="block text-black text-md mb-2">
                                        Nombre
                                   </label>
                                   <input
                                        type="text"

                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"

                                        id="firstName"
                                        placeholder="Ingrese su nombre"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.firstName &&
                                   formik.errors.firstName ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.firstName}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="lastName"

                                        className="block text-black text-md  mb-2">


                                        Apellido
                                   </label>
                                   <input
                                        type="text"

                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                    id="lastName"
                                        placeholder="Ingrese su apellido"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.lastName &&
                                   formik.errors.lastName ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.lastName}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="address"

                                        className="block text-black text-md  mb-2">


                                        Dirección
                                   </label>
                                   <input
                                        type="text"

                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"

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
                                        htmlFor="city"
                                        className="block text-black text-md  mb-2">
                                        Localidad
                                   </label>
                                   <input
                                        type="text"
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                                        id="city"
                                        placeholder="Ingrese su localidad"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.city &&
                                   formik.errors.city ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.city}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="email"

                                        className="block text-black text-md  mb-2">

                                        Email
                                   </label>
                                   <input
                                        type="text"

                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"

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

                                        className="block text-black text-md  mb-2">


                                        Contraseña
                                   </label>
                                   <input
                                        type="password"

                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"


                                        id="password"
                                        placeholder="Ingrese su contraseña"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.password &&
                                   formik.errors.password ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute mt-1 z-10">
                                             <p className=" text-sm">
                                                  {formik.errors.password}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>
                              <div className="mb-10">
                                   <label
                                        htmlFor="confirmpass"

                                        className="block text-black text-md  mb-2">

                                        Confirmar Contraseña
                                   </label>
                                   <input
                                        type="password"
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"


                                        id="confirmpass"
                                        placeholder="Confirme su contraseña"
                                        value={formik.values.confirmpass}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />
                                   {formik.touched.confirmpass &&
                                   formik.errors.confirmpass ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute mt-1 z-10">
                                             <p className=" text-sm">
                                                  {formik.errors.confirmpass}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>
                              <div className="w-full p-2">
                                   <input
                                        type="submit"

                                        className={`bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full w-full cursor-pointer mt-4 ease-in-out duration-300 ${


                                             (!formik.isValid ||
                                                  !formik.dirty) &&
                                             'bg-green cursor-not-allowed opacity-60 pointer-events-none hover:cursor-not-allowed'
                                        }`}
                                        value="Crear cuenta"
                                        disabled={
                                             !formik.isValid || !formik.dirty
                                        }
                                   />

                                   <div className="flex justify-center mt-4 text-base">
                                        ¿Ya tienes cuenta?
                                        <Link href="LoginPage">

                                             <span className=" font-medium cursor-pointer text-base hover:text-green-700 ml-1">


                                                  Inicia sesión
                                             </span>
                                        </Link>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Registerform;
