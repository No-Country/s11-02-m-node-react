'use client';
import { useState, useEffect } from 'react';
import { fetchProductsFilter } from '../../utils/getProducts';
import ProductCard from '@/app/components/Products/ProductCard';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useRouter, usePathname } from 'next/navigation';
function productCategory({ params }) {
     const router = useRouter();
     const location = usePathname();
     const [products, setProducts] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await fetchProductsFilter(params.category);
                    setProducts(data);
               } catch (error) {
                    console.error('Error al obtener productos', error);
               }
          };

          fetchData();
     }, []);
     if (products.length === 0 && location != '/')
          Loading.circle('Cargando Productos');
     else Loading.remove();
     function onClickBack() {
          router.push('/');
     }
     function seeProduct(id) {
          router.push(`/Product/${id}`);
     }
     return (
          <>
               <main className="flex flex-col  justify-center mt-8">
                    <div className="flex items-center lg:ml-40 lg:gap-8  ">
                         <img
                              src="/arrowBack.svg"
                              alt="arrow"
                              onClick={onClickBack}
                              className="cursor-pointer"
                         />
                         <h1 className="text-2xl">Productos en Subasta</h1>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center items-center m-4 ">
                         {products.map((product, index) => (
                              <div
                                   key={index}
                                   onClick={() => seeProduct(product.id)}>
                                   <ProductCard
                                        product={product}
                                        className="lg:w-72 lg:h-[27rem] md:p-4"
                                   />
                              </div>
                         ))}
                    </div>
               </main>
          </>
     );
}

export default productCategory;
