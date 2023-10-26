'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getProduct } from '@/app/utils/getProducts';
import { formattedTime } from './../../components/Products/formattedTime';
import SuccessModal from '../SuccessModal';

function Product({ params }) {
     const [product, setProduct] = useState({});
     const [like, setLike] = useState(0);
     const [showModal, setShowModal] = useState(false);
     const loggedUser = useSelector((state) => state.user);
     const router = useRouter();
     const number = parseInt(product.currentOffer, 10); // Convierte el string a un número
     const formattedNumber = number.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
     });
     const [price, setPrice] = useState('');
     function Likes() {
          setLike(like + 1);
     }
     const handleModalClose = () => {
          setShowModal(false);
          router.push('/ProductsPage');
     };
     const handleSubmit = async (event) => {
          event.preventDefault();
          const productId = params.id;
          const data = {
               currentBuyerId: loggedUser.id,
               currentOffer: parseInt(price),
          };
          console.log('data', data);
          try {
               const response = await fetch(
                    `https://reutilizzappapi.onrender.com/products/${productId}`,
                    {
                         method: 'PATCH',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(data),
                    }
               );

               if (response.ok) {
                    console.log('Solicitud PATCH exitosa');
                    setShowModal(true);
               } else {
                    console.error('Error en la solicitud PATCH');
               }
          } catch (error) {
               console.error('Error al procesar la solicitud PATCH', error);
          }
     };

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await getProduct(params.id);
                    setProduct(data);
               } catch (error) {
                    console.error('Error al obtener productos', error);
               }
          };

          fetchData();
     }, []);
     return (
          <main className="py-32 mx-28">
               <section className="flex justify-center gap-20 w-full">
                    <article className="flex flex-col justify-center w-3/5">
                         <h1 className="text-2xl mb-3">{product.name}</h1>
                         <div className="relative">
                              <img
                                   src={product.img}
                                   alt={product.name}
                                   className=" w-full object-cover h-96"
                              />
                              <div className="absolute top-2  right-2  rounded-full  border-2 p-2 px-4 flex justify-center items-center gap-2 cursor-pointer z-10">
                                   <img
                                        src="/heart.svg"
                                        alt="heart"
                                        className="h-7 hover:scale-105"
                                        onClick={Likes}
                                   />
                                   <p className="text-white">{like}</p>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-[#D5ECB8] px-8 py-1 rounded-lg text-[#517957]">
                                   1
                                   {(product.img?.length ?? 0) >= 1 &&
                                        `/${product.img?.length}`}
                              </div>
                         </div>
                         <div className="flex flex-col justify-center gap-8 mt-4">
                              <h2 className="text-xl">Descripción</h2>
                              <p>{product.description}</p>
                         </div>
                         <ul className="flex justify-between w-1/2 mt-8">
                              <div className="tracking-[.2rem] flex flex-col justify-center gap-4">
                                   <li>Marca</li>
                                   <li>Color</li>
                                   <li>Tipo de objeto</li>
                                   <li>Estado</li>
                              </div>
                              <div className="flex flex-col justify-center gap-4">
                                   <li>-</li>
                                   <li>-</li>
                                   <li>-</li>
                                   <li>-</li>
                              </div>
                         </ul>
                    </article>
                    <article className="w-2/5 border-[#6F9F77] border-2 rounded-2xl  h-80 mt-10 ">
                         <div className="flex flex-col justify-center ">
                              <div className="flex flex-col justify-center p-4 gap-2">
                                   <h1 className="text-[#1D262B] text-lg">
                                        Cierra en{' '}
                                        {formattedTime(product.endDate)}
                                   </h1>
                                   <h1 className="text-3xl text-[#517957] ml-1">
                                        ${formattedNumber} ARS
                                   </h1>
                                   <p className="text-[#517957] ">
                                        Último precio ofertado
                                   </p>
                              </div>
                              <form
                                   className="flex flex-col justify-center items-center px-5"
                                   onSubmit={handleSubmit}>
                                   <input
                                        type="text"
                                        name="price"
                                        placeholder="Establecer otro precio..."
                                        className=" border-2 rounded-full border-[#517957] p-3 w-full mt-4 placeholder:text-[#517957]"
                                        value={price}
                                        onChange={(e) => {
                                             const inputText = e.target.value;
                                             const numericValue =
                                                  inputText.replace(
                                                       /[^0-9]/g,
                                                       ''
                                                  );
                                             setPrice(numericValue);
                                        }}
                                   />
                                   <input
                                        type="submit"
                                        className="bg-[#517957] text-white border-2 rounded-full border-[#517957] p-3 w-full mt-4 disabled:opacity-75 "
                                        disabled={
                                             !price ||
                                             parseInt(price) === 0 ||
                                             parseInt(price) <= formattedNumber
                                        }
                                        value="Subastar"
                                   />
                              </form>
                              {showModal && (
                                   <SuccessModal onClose={handleModalClose} />
                              )}
                         </div>
                    </article>
               </section>
          </main>
     );
}

export default Product;
