'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getProduct } from '@/app/utils/getProducts';
import { getUsers } from '@/app/utils/getProducts';
import { Report, Loading } from 'notiflix';
import { auction } from '@/app/utils/getProducts';
import Link from 'next/link';
import moment from 'moment';

function Product({ params }) {
     const router = useRouter();
     const [product, setProduct] = useState({});
     const [seller, setSeller] = useState('');
     const [like, setLike] = useState(0);
     const LoginToken = localStorage.getItem('access_token');
     const getUser = JSON.parse(localStorage.getItem('persist:root'));
     const user = JSON.parse(getUser.user);
     const loggedUser = useSelector((state) => state.user);
     const [isLoggedIn, setIsLoggedIn] = useState(LoginToken ? true : false);
     const [price, setPrice] = useState(0);
     const sameUserOffer = product.sellerId === (loggedUser && loggedUser.id);
     const endDate = moment(product.endDate);
     const currentDate = moment();
     const duration = moment.duration(endDate.diff(currentDate));
     const days = duration.days();
     const hours = duration.hours();
     const diferenciaFechas = `${days} días y ${hours} horas`;
     const userWallet =
          loggedUser && loggedUser.wallet && loggedUser.wallet.amount;

     const [cantPay, setCantPay] = useState(false);
     if (Object.keys(product).length === 0) {
          Loading.circle('Cargando Producto :D');
     }

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const dataProduct = await getProduct(params.id);
                    setProduct(dataProduct);
                    const getSeller = await getUsers(dataProduct.sellerId);
                    setSeller(getSeller);
                    Loading.remove();
               } catch (error) {
                    console.error('Error al obtener productos', error);
                    Loading.remove();
               }
          };

          fetchData();
     }, []);

     useEffect(() => {
          if (loggedUser) {
               const noFunds =
                    loggedUser.wallet &&
                    loggedUser.wallet.amount <
                         (product && product.currentOffer);
               setCantPay(noFunds);
          }
     }, [loggedUser, product]);

     const number = parseInt(product.currentOffer, 10); // Convierte el string a un número
     const formattedNumber = number.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
     });

     function Likes() {
          setLike(like + 1);
     }

     function newPrice(e) {
          setCantPay(false);
          setPrice(parseFloat(e.target.value));
     }
     function sendNewPrice() {
          let saldo =
               loggedUser && loggedUser.wallet && loggedUser.wallet.amount;

          if (price > number) {
               if (price > userWallet) {
                    setCantPay(true);
               } else
                    auction({
                         productId: params.id,
                         userId: user.id,
                         newOffer: price,
                    })
                         .then((e) => {
                              Report.success(
                                   '¡Subasta realizada con éxito!! ',
                                   'Te avisaremos por email con información del ganador cuando termine el período de subasta. ¡Gracias por participar!',
                                   'Listo',
                                   () => {
                                        router.push('/AuctionedPage');
                                   },
                                   {
                                        width: '500px',
                                        height: '600px',
                                        svgSize: '200px',
                                        fontFamily: 'Poppins',
                                        titleFontSize: '24px',
                                        messageFontSize: '15px',
                                        className: ' display:flex',
                                        success: {
                                             titleColor: '#517957',
                                             buttonBackground: '#517957',
                                        },
                                   }
                              );
                         })
                         .catch((e) => {
                              console.log(e);
                         });
          } else {
               saldo < number ? setCantPay(true) : console.log('hola');
          }
     }

     return (
          <main className="lg:py-20  mx-8 lg:mx-28 ">
               <div className="flex justify-start items-center gap-4 ml-6 mb-4">
                    <Link href="/"> Inicio {'>'} </Link>
                    <Link href="/ProductsPage"> productos {'>'}</Link>
                    <Link
                         href={`/ProductsPage/${
                              product.tags && product.tags[0]
                         }`}>
                         {product.tags && product.tags[0]} {'>'}
                    </Link>
                    <span>{product.name}</span>
               </div>
               <section className="flex lg:flex-row flex-col justify-center lg:gap-20 w-full">
                    <article className="flex flex-col justify-center lg:w-3/5 ">
                         <h1 className="text-2xl mb-3 md:ml-4">
                              {product.name}
                         </h1>
                         <div className="relative">
                              <img
                                   src={product.img}
                                   alt={product.name}
                                   className=" w-full object-contain h-96"
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
                         <div className="flex flex-col justify-center lg:gap-8 gap-4 mt-4 px-4 ">
                              <h2 className="text-xl">Descripción</h2>
                              <p>{product.description}</p>
                         </div>
                    </article>
                    <article className="lg:w-2/5">
                         <div className=" border-[#6F9F77] border-2 rounded-2xl  h-80 lg:mt-10 m-4  ">
                              <div className="flex flex-col justify-center ">
                                   <div className="flex flex-col justify-center p-4 gap-2">
                                        <h1 className="text-[#1D262B] text-lg">
                                             {`Cierra en ${diferenciaFechas}`}
                                        </h1>
                                        <h1 className="text-3xl text-[#517957] ml-1">
                                             ${formattedNumber}
                                        </h1>
                                        <p className="text-[#517957] ">
                                             Último precio ofertado
                                        </p>
                                   </div>
                                   <div className="flex flex-col justify-center items-center px-5">
                                        <input
                                             type="number"
                                             name="price"
                                             value={
                                                  price ? parseInt(price) : ''
                                             }
                                             onChange={newPrice}
                                             required
                                             placeholder="Establecer otro precio..."
                                             className=" border-2 rounded-full border-[#517957] p-3 w-full mt-4 placeholder:text-[#517957]  "
                                             min={number ? number : 0}
                                        />
                                        <button
                                             className="bg-[#517957] text-white border-2 rounded-full border-[#517957] p-3 w-full mt-4 disabled:opacity-75 "
                                             disabled={
                                                  !isLoggedIn ||
                                                  sameUserOffer ||
                                                  cantPay
                                             }
                                             onClick={sendNewPrice}>
                                             Subastar
                                        </button>
                                   </div>
                                   {!isLoggedIn && (
                                        <p className="text-center mt-2 text-red-500 text-sm">
                                             Debe de iniciar sesion para poder
                                             subastar
                                        </p>
                                   )}
                                   {sameUserOffer && (
                                        <p className="text-center mt-2 text-red-500 text-sm">
                                             No puedes ofertar en tu propia
                                             publicación!
                                        </p>
                                   )}
                                   {cantPay && loggedUser && (
                                        <p className="text-center mt-2 text-red-500 text-sm">
                                             No tienes fondos suficientes para
                                             ofertar!
                                        </p>
                                   )}
                              </div>
                         </div>
                         <div className="flex justify-start items-center gap-4 ml-6">
                              <img
                                   src="https://this-person-does-not-exist.com/img/avatar-gen87cb681c5548f55224b176606f8d82e6.jpg"
                                   alt="avatar"
                                   className="h-16 rounded-full p-1 bg-[#6F9F77]"
                              />
                              <div>
                                   <h2 className="text-[#27343A] text-xl">
                                        Precio estimado a partir de{' '}
                                        {formattedNumber}{' '}
                                   </h2>
                                   <p className="text-[#517957]">
                                        por {seller.user?.firstName}{' '}
                                        {seller.user?.lastName}
                                   </p>
                              </div>
                         </div>
                    </article>
               </section>
          </main>
     );
}

export default Product;
