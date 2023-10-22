import React from 'react';

function CategoryBtn() {
     return (
          <div className="mt-4 mb-4 md:mt-20 space-x-1">
               <button className="bg-white border border-black text-black py-2 px-2 md:px-4 rounded mt-2">
                    Muebles
               </button>
               <button className="bg-white border border-black text-black py-2 px-2 md:px-4 rounded mt-2">
                    Electrodomésticos
               </button>
               <button className="bg-white border border-black text-black py-2 px-2 md:px-4 rounded mt-2">
                    Ropa
               </button>
               <button className="hidden md:inline bg-white border border-black text-black py-2 px-4 rounded mt-2">
                    Deco & Hogar
               </button>
               <button className="hidden md:inline bg-white border border-black text-black py-2 px-4 rounded mt-2">
                    Belleza
               </button>
               <button className=" hidden md:inline  bg-white border border-black text-black py-2 px-4 rounded mt-2">
                    Arte
               </button>
               <button className="hidden md:inline  bg-white border border-black text-black py-2 px-4 rounded mt-2">
                    Cartas
               </button>
               <button className="hidden md:inline bg-white border border-black text-black py-2 px-4 rounded mt-2">
                    Otros
               </button>
          </div>
     );
}

export default CategoryBtn;
