'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import mainRoute from '@/route';
import { options } from './options';

const Registerform = () => {
     const loggedUser = useSelector((state) => state.user);
     const accessToken = localStorage.getItem('access_token');
     const [fechaConvertida, setFechaConvertida] = useState('');
     const router = useRouter();
     const now = new Date();
     const isoString = now.toISOString();
     const horaParte = isoString.slice(10, 24);

     const handleChange = (selected) => {
          setSelectedOptions(selected);
     };

     const today = new Date();
     const tomorrow = new Date(today);
     tomorrow.setDate(today.getDate() + 1);

     const year = tomorrow.getFullYear();
     const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
     const day = tomorrow.getDate().toString().padStart(2, '0');

     const formattedTomorrow = `${year}-${month}-${day}`;

     const formik = useFormik({
          initialValues: {
               name: '',
               description: '',
               img: null,
               currentOffer: '',
               sellerId: loggedUser.id,
               endDate: '',
               tags: [],
               status: 'ACTIVE',
          },
          validationSchema: Yup.object({
               name: Yup.string().required('El nombre es obligatorio'),

               description: Yup.string().required(
                    'La descripción es obligatoria'
               ),
               currentOffer: Yup.number().required(
                    'El valor inicial es obligatorio'
               ),

               endDate: Yup.date().required(
                    'La fecha de caducidad es obligatoria'
               ),
               tags: Yup.array().min(1, 'Selecciona al menos una categoría'),
               img: Yup.mixed().required('La imagen es obligatoria'),
          }),

          onSubmit: async (values) => {
               console.log('submiting!');
               try {
                    // Subir la imagen a Cloudinary
                    const cloudinaryResponse = await uploadImageToCloudinary(
                         values.img
                    );

                    if (cloudinaryResponse && cloudinaryResponse.urlImg) {
                         // Si la carga de la imagen en Cloudinary fue exitosa
                         const productData = {
                              ...values,
                              endDate: fechaConvertida,
                              img: [cloudinaryResponse.urlImg], //] Usar la URL de la imagen desde Cloudinary
                         };

                         // Realizar la solicitud para crear un nuevo producto en tu backend
                         const response = await fetch(`${mainRoute}/products`, {
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json',
                                   Authorization: `Bearer ${accessToken}`,
                              },
                              body: JSON.stringify(productData),
                         });
                         console.log('data!!', JSON.stringify(productData));
                         if (!response.ok) {
                              throw new Error(
                                   'Error en la solicitud al backend'
                              );
                         }

                         const data = await response.json();

                         toast.success('Subasta publicada con éxito.', {
                              position: 'bottom-right',
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                         });

                         router.push('/ProductsPage');
                    } else {
                         toast.error('Error al publicar producto');
                    }
               } catch (error) {
                    console.error(error);

                    toast.error('La Subasta no pudo ser publicada', {
                         position: 'bottom-right',
                         autoClose: 3000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                    });
               }
          },
     });
     const uploadImageToCloudinary = async (imageFile) => {
          console.log('imagen', imageFile);
          const CLOUDINARY_API_URL =
               'https://reutilizzappapi.onrender.com/cloudinary/upload';

          try {
               const formData = new FormData();

               formData.append('file', imageFile);

               const response = await fetch(CLOUDINARY_API_URL, {
                    method: 'POST',
                    body: formData,
               });

               if (response.ok) {
                    const data = await response.json();
                    console.log('subida ok!!', data);
                    return data;
               } else {
                    console.error('No se pudo cargar la imagen a Cloudinary');
                    return null;
               }
          } catch (error) {
               console.error('Error al cargar la imagen a Cloudinary:', error);
               return null;
          }
     };
     console.log('hora', horaParte);
     return (
          <div className="flex justify-center md:mt-8 mb-8">
               <div className="w-full max-w-xl">
                    <div className="bg-neutral-100 rounded-lg shadow-2xl px-6 py-8 ">
                         <h2 className="text-xl font-sans text-white-800 text-center mb-6">
                              Subastar un producto
                         </h2>
                         <form action="" onSubmit={formik.handleSubmit}>
                              <div className="mb-10">
                                   <label
                                        htmlFor="name"
                                        className="block text-black text-md mb-2">
                                        Escribe un título para tu producto
                                   </label>
                                   <input
                                        type="text"
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                                        id="name"
                                        placeholder="Titulo"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.name &&
                                   formik.errors.name ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.name}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="description"
                                        className="block text-black text-md  mb-2">
                                        Añade una descripción
                                   </label>
                                   <input
                                        type="text"
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                                        id="description"
                                        placeholder="Descripción"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.description &&
                                   formik.errors.description ? (
                                        <div className="my-1 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 text-center absolute">
                                             <p className="text-sm">
                                                  {formik.errors.description}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="tags"
                                        className="block text-black text-md  mb-2">
                                        Categoría
                                   </label>
                                   <Select
                                        id="tags"
                                        name="tags"
                                        options={options}
                                        isMulti
                                        value={options.filter((option) =>
                                             formik.values.tags.includes(
                                                  option.value
                                             )
                                        )}
                                        onBlur={formik.handleBlur}
                                        onChange={(selectedOptions) => {
                                             const selectedValues =
                                                  selectedOptions.map(
                                                       (option) => option.value
                                                  );
                                             formik.setFieldValue(
                                                  'tags',
                                                  selectedValues
                                             );
                                        }}
                                   />
                              </div>
                              {formik.touched.tags && formik.errors.tags ? (
                                   <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute">
                                        <p className=" text-sm">
                                             {formik.errors.tags}
                                        </p>
                                   </div>
                              ) : null}
                              <div className="mb-10">
                                   <label
                                        htmlFor="img"
                                        className="block text-black text-md  mb-2">
                                        Seleccione una imágen
                                   </label>
                                   <input
                                        type="file" // Cambia el tipo a "file"
                                        accept="image/*" // Define los tipos de archivos permitidos (imágenes en este caso)
                                        id="img"
                                        onChange={(e) => {
                                             formik.setFieldValue(
                                                  'img',
                                                  e.currentTarget.files[0]
                                             );
                                        }}
                                        onBlur={formik.handleBlur}
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                                   />

                                   {formik.touched.img && formik.errors.img ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute">
                                             <p className=" text-sm">
                                                  {formik.errors.img}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>

                              <div className="mb-10">
                                   <label
                                        htmlFor="endDate"
                                        className="block text-black text-md  mb-2">
                                        Agregar fecha de caducidad
                                   </label>
                                   <input
                                        type="date"
                                        min={formattedTomorrow}
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                                        id="endDate"
                                        placeholder="Seleccione la fecha"
                                        value={formik.values.endDate}
                                        onChange={(e) => {
                                             // 2. Actualiza el estado de la fecha convertida cada vez que cambie la fecha
                                             const fechaOriginal =
                                                  e.target.value;
                                             const fechaConvertida = new Date(
                                                  fechaOriginal + horaParte
                                             ).toISOString();
                                             setFechaConvertida(
                                                  fechaConvertida
                                             );
                                             formik.handleChange(e); // Importante: También llama a handleChange de Formik para que maneje el valor en formik.values
                                        }}
                                        onBlur={formik.handleBlur}
                                   />

                                   {formik.touched.endDate &&
                                   formik.errors.endDate ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute mt-1 z-10">
                                             <p className=" text-sm">
                                                  {formik.errors.endDate}
                                             </p>
                                        </div>
                                   ) : null}
                              </div>
                              <div className="mb-10">
                                   <label
                                        htmlFor="currentOffer"
                                        className="block text-black text-md  mb-2">
                                        Establece el precio inicial de la
                                        Subasta
                                   </label>
                                   <input
                                        type="number"
                                        className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:border-green-700 outline-none focus:ring-1 focus:ring-green-700 text-black"
                                        id="currentOffer"
                                        placeholder="Ingresa un valor en pesos argentinos ($)"
                                        value={formik.values.currentOffer}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                   />
                                   {formik.touched.currentOffer &&
                                   formik.errors.currentOffer ? (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 px-1 py-1 absolute mt-1 z-10">
                                             <p className=" text-sm">
                                                  {formik.errors.currentOffer}
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
                                             'bg-green-500 cursor-not-allowed opacity-60 hover:cursor-not-allowed'
                                        }`}
                                        value="Subastar"
                                        disabled={
                                             !formik.isValid || !formik.dirty
                                        }
                                   />
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Registerform;
