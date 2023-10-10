import React from 'react';

function Category() {
  return (
    <div className=" bg-white p-16 flex flex-col justify-center ">
      <h1 className="text-black text-4xl mb-4 ">Categorias</h1>

      <ul className="flex flex-col items-center justify-center gap-10 text-xl flex-wrap">
        <div className="flex flex-row gap-10 flex-wrap">
          <li className="bg-slate-500 rounded-t-xl rounded-br-lg h-40 w-40 flex items-center justify-center">
            Electro
          </li>
          <li className="bg-slate-500 rounded-t-xl rounded-br-lg h-40 w-40 flex items-center justify-center">
            Deco
          </li>
          <li className="bg-slate-500 rounded-t-xl rounded-br-lg h-40 w-40 flex items-center justify-center">
            Ropa
          </li>
        </div>
        <div className="flex flex-row gap-10 flex-wrap">
          <li className="bg-slate-500 rounded-t-xl rounded-br-lg h-40 w-40 flex items-center justify-center">
            Muebles
          </li>
          <li className="bg-slate-500 rounded-t-xl rounded-br-lg h-40 w-40 flex items-center justify-center">
            Belleza
          </li>
          <li className="bg-slate-500 rounded-t-xl rounded-br-lg h-40 w-40 flex items-center justify-center">
            Otros...
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Category;
