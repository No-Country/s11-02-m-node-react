import React from 'react';

const MiSaldo = () => {
     return (
          <div className="">
               <article className="mx-auto lg:w-2/5 border-[#6F9F77] border-2 rounded-2xl lg:mt-10 p-6  ">
                    <div className="flex flex-col justify-center ">
                         <div className="flex flex-col justify-center p-4 gap-2">
                              <h1 className="text-[#1D262B] text-md">
                                   Tu saldo:
                              </h1>
                              <h1 className="text-3xl ml-1">1000 ARS</h1>
                              <p className="pt-2 pb-2">Ingreso de dinero</p>
                         </div>
                         <div className="flex flex-col p-5">
                              <p className="text-sm ">Ingresar monto</p>
                              <input
                                   type="number"
                                   name="saldo"
                                   value={0}
                                   //onChange={newPrice}
                                   required
                                   placeholder="Ingrese un monto"
                                   className=" border-2 border-[#517957] p-3 w-full mt-4 placeholder:text-[#517957] focus:border-green-700"
                                   //min={number ?? 0}
                              />
                              <select className="border-2 border-[#517957] p-3 w-full mt-4 placeholder:text-[#517957] focus:border-green-700 ">
                                   <option value="">
                                        Seleccione su método de ingreso
                                   </option>
                                   <option value="opcion1">Opción 1</option>
                                   <option value="opcion2">Opción 2</option>
                              </select>

                              <button
                                   className="bg-[#517957] text-white border-2 rounded-full border-[#517957] p-3 w-full mt-4 disabled:opacity-75 "
                                   disabled={false}
                                   //onClick={}
                              >
                                   Ingresar dinero
                              </button>
                         </div>
                    </div>
               </article>
          </div>
     );
};

export default MiSaldo;
