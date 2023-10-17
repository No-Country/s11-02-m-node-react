'use client';
import { useRouter } from 'next/navigation';
import ProductCard from '../components/Products/ProductCard';
import { products } from '../components/Products/productos';

const ProductsPage = () => {
     const router = useRouter();
     const handleBack = () => {
          router.back();
     };

     return (
          <div className="bg-white pl-4 pr-4 pt-4 md:pb-20 md:pt-10 md:pl-24 md:pr-24 ">
               <div className="flex flex-row mb-4 md:mb-10">
                    <button
                         onClick={handleBack}
                         className="text-2xl md:text-4xl mr-8">
                         {'<'}
                    </button>
                    <h2 className="text-xl md:text-3xl ">
                         Productos en Subasta
                    </h2>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-16">
                    {products.map((product) => (
                         <ProductCard product={product} />
                    ))}
               </div>
          </div>
     );
};

export default ProductsPage;
