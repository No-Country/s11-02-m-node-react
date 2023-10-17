'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { products } from './productos';
import ProductCard from './ProductCard';

function Products() {
     const router = useRouter();
     const handleProductsPage = () => {
          router.push('/ProductsPage');
     };
     return (
          <div className="bg-white p-4 md:pb-20 md:pt-20 md:pl-24 md:pr-24 rounded-md shadow-md">
               <div className="flex flex-row justify-between items-center mt-4 mb-4 md:mb-10">
                    <h2 className="text-xl md:text-3xl ">
                         Productos en subasta
                    </h2>
                    <button
                         className="border-2 border-Fern/green bg-white text-Fern/green px-8 h-12 rounded-full hover:bg-green-700 hover:text-white "
                         onClick={handleProductsPage}>
                         Ver todos
                    </button>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-28">
                    {products.slice(0, 4).map((product) => (
                         <ProductCard product={product} />
                    ))}
               </div>
          </div>
     );
}

export default Products;
