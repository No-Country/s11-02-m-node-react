'use client';
import { useState, useEffect } from 'react';
import { fetchProductsFilter } from '../../utils/getProducts';
import ProductCard from '@/app/components/Products/ProductCard';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useRouter } from 'next/navigation';
function productCategory({ params }) {
     const router = useRouter();
     const [products, setProducts] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await fetchProductsFilter(params.category);
                    setProducts(data);
                    Loading.remove();
               } catch (error) {
                    console.error('Error al obtener productos', error);
                    Loading.remove();
               }
          };

          fetchData();
          Loading.circle('Cargando Productos');
     }, []);
     function onClick() {
          router.push('/');
     }

     return (
          <>
               <main className="flex flex-col  justify-center mt-8">
                    <div className="flex items-center lg:ml-40 lg:gap-8  ">
                         <img
                              src="/arrowBack.svg"
                              alt="arrow"
                              onClick={onClick}
                              className="cursor-pointer"
                         />
                         <h1 className="text-2xl">Productos en Subasta</h1>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center items-center m-4 ">
                         {products.map((product) => (
                              <div key={product.id}>
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
