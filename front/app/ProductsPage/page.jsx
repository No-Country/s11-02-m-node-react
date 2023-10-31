'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '../components/Products/ProductCard';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchProducts } from '../utils/getProducts';

const ProductsPage = () => {
     const [products, setProducts] = useState([]);
     const [page, setPage] = useState(1);
     const productsPerPage = 12;
     const router = useRouter();
     const startIndex = (page - 1) * productsPerPage;
     const endIndex = startIndex + productsPerPage;
     const productsToDisplay = products.slice(startIndex, endIndex);

     const handleBack = () => {
          router.push('/');
     };
     function seeProduct(id) {
          router.push(`/Product/${id}`);
     }

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await fetchProducts();
                    setProducts(data);
               } catch (error) {
                    console.error('Error al obtener productos', error);
               }
          };

          fetchData();
     }, []);
     if (products.length === 0) Loading.circle('Cargando Productos');
     else Loading.remove();
     return (
          <div className="bg-white pl-4 pr-4 pt-4 md:pb-20 md:pt-10 md:pl-24 md:pr-24">
               <div className="flex flex-row mb-4 md:mb-10">
                    <button
                         onClick={handleBack}
                         className="text-2xl md:text-4xl mr-8">
                         {'<'}
                    </button>
                    <h2 className="text-xl md:text-3xl">
                         Productos en Subasta
                    </h2>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {productsToDisplay.map((product, index) => (
                         <div
                              onClick={() => seeProduct(product.id)}
                              key={index}>
                              <ProductCard product={product} />
                         </div>
                    ))}
               </div>

               <div className="flex flex-col items-center mt-10 mb-4 justify-center md:space-x-6 md:flex-row">
                    <button
                         className={`border-2 mb-4 ${
                              page === 1
                                   ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                                   : 'border-Fern/green bg-white text-Fern/green hover:bg-green-700 hover:text-white'
                         } px-16 py-2 rounded-full`}
                         onClick={() => setPage(page - 1)}
                         disabled={page === 1}>
                         Página anterior
                    </button>
                    <button
                         className={`border-2 mb-4 ${
                              endIndex >= products.length
                                   ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                                   : 'border-Fern/green bg-white text-Fern/green hover:bg-green-700 hover:text-white'
                         } px-16 py-2 rounded-full`}
                         onClick={() => setPage(page + 1)}
                         disabled={endIndex >= products.length}>
                         Página siguiente
                    </button>
               </div>
          </div>
     );
};

export default ProductsPage;
