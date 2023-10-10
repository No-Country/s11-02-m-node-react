import React from 'react';

function Category() {
     return (
          <div className=" bg-white p-16  ">
               <ul className="flex flex-col items-center justify-center gap-10 text-xl flex-wrap">
                    <h1 className="text-black text-4xl  ">Categorias</h1>
                    <div className="flex flex-row gap-10 justify-center items-center flex-wrap">
                         <li className="categoryDiv">Electro</li>
                         <li className="categoryDiv">Deco</li>
                         <li className="categoryDiv">Ropa</li>
                    </div>
                    <div className="flex flex-row gap-10 justify-center items-center flex-wrap">
                         <li className="categoryDiv">Muebles</li>
                         <li className="categoryDiv ">Belleza</li>
                         <li className="categoryDiv ">Otros...</li>
                    </div>
               </ul>
          </div>
     );
}

export default Category;
