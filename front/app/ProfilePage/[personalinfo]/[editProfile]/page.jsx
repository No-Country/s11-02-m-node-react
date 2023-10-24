'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import mainRoute from '@/route';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const editProfile = () => {
     const loggedUser = useSelector((state) => state.user);
     const [cityResults, setCityResults] = useState([]);
     const [cityInput, setCityInput] = useState('');
     const [fetchError, setFetchError] = useState(null);

     const router = useRouter();
     const formik = useFormik({
          initialValues: {
               firstName: '',
               lastName: '',
               city: '',
               email: '',
               password: '',
          },
          validationSchema: Yup.object({
               firstName: Yup.string()
                    .required('El nombre es obligatorio')
                    .matches(
                         /^[A-Za-z\s]+$/,
                         'El nombre sólo puede contener letras'
                    ),

               lastName: Yup.string()
                    .required('El apellido es obligatorio')
                    .matches(
                         /^[A-Za-z\s]+$/,
                         'El apellido sólo puede contener letras'
                    ),

               city: Yup.string().required('La ciudad es obligatoria'),

               email: Yup.string()
                    .email('El email no es válido')
                    .matches(/.*@.*\.com/, 'El email no es válido')
                    .required('El email es obligatorio'),

               password: Yup.string()
                    .required('La contraseña es obligatoria')
                    .min(6, 'La contraseña debe tener 6 carecteres'),
          }),
          onSubmit: async (values) => {
               // const { confirmpass, ...userData } = values;
               const { ...userData } = values;
               try {
                    const response = await fetch(
                         `${mainRoute}/users/${loggedUser.id}`,
                         {
                              method: 'PATCH',
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

                    toast.success('Datos editados correctamente', {
                         position: 'bottom-right',
                         autoClose: 3000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                    });
                    router.push('/ProfilePage');
               } catch (error) {
                    console.log(error);
                    toast.error('Error al editar perfil', {
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

     useEffect(() => {
          if (cityInput) {
               fetch(`${mainRoute}/users/get-city?q=${cityInput}`)
                    .then((response) => {
                         if (!response.ok) {
                              throw new Error('Error en la solicitud');
                         }
                         return response.json();
                    })
                    .then((data) => {
                         setCityResults(data);
                    })
                    .catch((error) => {
                         console.error('Error en la solicitud: ', error);
                         setFetchError('Error en la solicitud');
                         setCityResults([]);
                    });
          } else {
               setCityResults([]);
          }
     }, [cityInput]);

     return (
          <div className="flex items-center justify-center md:mt-8 mb-8">
               <div className="max-w-2xl px-6 py-8 w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                    <div className="flex justify-start">
                         <Link href="/ProfilePage">
                              <h4 className="text-md font-bold mb-4 text-Fern/green flex ">
                                   {' '}
                                   <ChevronLeft />
                                   Información personal
                              </h4>
                         </Link>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                         <div className="mb-10">
                              <label
                                   htmlFor="firstName"
                                   className="block font-semibold mt-2 mb-3">
                                   Nombre
                              </label>
                              <input
                                   type="text"
                                   id="firstName"
                                   name="firstName"
                                   placeholder="John"
                                   className="p-3 w-full border border-black"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                              />

                              {formik.touched.firstName &&
                              formik.errors.firstName ? (
                                   <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute ">
                                        <p className="text-sm">
                                             {formik.errors.firstName}
                                        </p>
                                   </div>
                              ) : null}
                         </div>

                         <div className="mb-10">
                              <label
                                   htmlFor="lastName"
                                   className="block font-semibold mt-2 mb-3">
                                   Apellido
                              </label>
                              <input
                                   type="text"
                                   id="lastName"
                                   name="lastName"
                                   placeholder="Doe"
                                   className="p-3 w-full border border-black"
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
                                   htmlFor="email"
                                   className="block font-semibold mt-2 mb-3">
                                   Correo Electrónico
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   name="email"
                                   placeholder="mail@mail.com"
                                   className="p-3 w-full border border-black"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                              />

                              {formik.touched.email && formik.errors.email ? (
                                   <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                        <p className="text-sm">
                                             {formik.errors.email}
                                        </p>
                                   </div>
                              ) : null}
                         </div>

                         <div className="mb-10">
                              <label
                                   htmlFor="city"
                                   className="block font-semibold mt-2 mb-3">
                                   Ciudad
                              </label>
                              <input
                                   type="text"
                                   name="city"
                                   id="city"
                                   placeholder="TANDIL, Tandil, Buenos Aires"
                                   className="p-3 w-full border border-black"
                                   value={cityInput}
                                   onChange={(e) =>
                                        setCityInput(e.target.value)
                                   }
                                   onBlur={formik.handleBlur}
                              />
                              {cityResults.length > 0 && (
                                   <ul className="bg-white absolute w-20% border border-gray-300 rounded-t-lg border-t-0 z-10">
                                        {cityResults
                                             .slice(0, 6)
                                             .map((result, index) => (
                                                  <li
                                                       key={index}
                                                       className="p-2 cursor-pointer text-black hover:bg-indigo-100"
                                                       onClick={() => {
                                                            setCityInput(
                                                                 result
                                                            );
                                                            setCityResults([]);
                                                            formik.setFieldValue(
                                                                 'city',
                                                                 result
                                                            );
                                                       }}>
                                                       {result}
                                                  </li>
                                             ))}
                                   </ul>
                              )}
                         </div>
                         {formik.touched.city && formik.errors.city ? (
                              <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                   <p className=" text-sm">
                                        {formik.errors.city}
                                   </p>
                              </div>
                         ) : null}

                         <div className="mb-10">
                              <label
                                   htmlFor="password"
                                   className="block font-semibold mt-2 mb-3">
                                   Contraseña
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Modifique su contraseña"
                                   className="p-3 w-full border border-black"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                              />

                              {formik.touched.password &&
                              formik.errors.password ? (
                                   <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                        <p className="text-sm">
                                             {formik.errors.password}
                                        </p>
                                   </div>
                              ) : null}
                         </div>

                         <input
                              type="submit"
                              className="bg-Fern/green text-white py-3 px-6 w-full rounded-3xl cursor-pointer"
                              value="Guardar"
                         />
                    </form>
               </div>
          </div>
     );
};

export default editProfile;
