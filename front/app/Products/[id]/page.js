import { products } from '@/app/components/Products/productos';
import Image from 'next/image';
function productCategory({ params }) {
     const productSearch = products.filter((e) => params.id === e.category);
     return (
          <div>
               {productSearch.map((product) => (
                    <div
                         key={product.id}
                         className="bg-white border p-8 rounded-md shadow-md hover:shadow-lg w-150 ">
                         <Image
                              src={product.image}
                              alt={product.name}
                              className=" mx-auto w-1/2 md:w-52 md:h-52 object-cover mb-2"
                         />
                         <p className="text-xl font-semibold mb-6 mt-6">
                              {product.name}
                         </p>
                         <p className="text-sm text-gray-500 mb-2">
                              {product.description}
                         </p>
                         <p className="text-xl font-semibold mt-3">
                              {product.price}
                         </p>
                    </div>
               ))}
          </div>
     );
}

export default productCategory;
