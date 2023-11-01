'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProducts, fetchProductsFilter } from '../../utils/getProducts';
import ProductCard from './ProductCard';

function Products({ category }) {
     const router = useRouter();

     const [products, setProducts] = useState([]);
     const handleProductsPage = () => {
          if (category) {
               router.push(`/ProductsPage/${category}`);
          } else {
               router.push('/ProductsPage');
          }
     };
     useEffect(() => {
          const fetchData = async () => {
               try {
                    let data;

                    if (category) {
                         data = await fetchProductsFilter(category);
                    } else {
                         data = await fetchProducts();
                    }

                    setProducts(data);
               } catch (error) {
                    console.error('Error al obtener productos', error);
               }
          };

          fetchData();
     }, [category]);

     console.log('categoria', category);
     return (
          <div className="bg-white p-4 md:pb-20 md:pt-20 md:pl-24 md:pr-24 rounded-md shadow-md">
               <div className="flex flex-row justify-between items-center mt-4 mb-4 md:mb-10">
                    <h1 className=" text-black lg:text-4xl lg:m-0 ">
                         Productos en subasta
                    </h1>
                    <button
                         className="border-2  border-Fern/green bg-white text-black p-1 px-4 h-10 rounded-full "
                         onClick={handleProductsPage}>
                         Ver todo
                    </button>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {products.slice(0, 4).map((product, index) => (
                         <ProductCard product={product} key={index} />
                    ))}
               </div>
          </div>
     );
}

export default Products;
