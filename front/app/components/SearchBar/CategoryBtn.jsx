'use client';
import React, { useState } from 'react';

function CategoryBtn({ onCategoryChange }) {
     const [selected, setSelected] = useState('');

     const handleCategoryClick = (newCategory) => {
          // Comprueba si el botón actual es el mismo que el seleccionado
          if (newCategory === selected) {
               // Deselecciona el botón actual
               setSelected('');
          } else {
               // Establece el nuevo botón como seleccionado
               setSelected(newCategory);
               // Llama a la función proporcionada en las props para actualizar la categoría
               onCategoryChange(newCategory);
          }
     };

     const getButtonClasses = (category) => {
          // Agrega la clase "selected" al botón si coincide con el seleccionado
          return ` border border-black text-black py-2 px-2 md:px-4 rounded mt-2 ${
               category === selected ? 'bg-[#D5ECB8]' : 'bg-white'
          }`;
     };

     return (
          <div className="mt-4 mb-4 md:mt-20 space-x-1">
               <button
                    onClick={() => handleCategoryClick('muebles')}
                    className={getButtonClasses('muebles')}>
                    Muebles
               </button>
               <button
                    onClick={() => handleCategoryClick('electrodomesticos')}
                    className={getButtonClasses('electrodomesticos')}>
                    Electrodomésticos
               </button>
               <button
                    onClick={() => handleCategoryClick('ropa')}
                    className={getButtonClasses('ropa')}>
                    Ropa
               </button>
               <button
                    onClick={() => handleCategoryClick('hogar')}
                    className={getButtonClasses('hogar')}>
                    Deco & Hogar
               </button>
               <button
                    onClick={() => handleCategoryClick('belleza')}
                    className={getButtonClasses('belleza')}>
                    Belleza
               </button>
               <button
                    onClick={() => handleCategoryClick('arte')}
                    className={getButtonClasses('arte')}>
                    Arte
               </button>
               <button
                    onClick={() => handleCategoryClick('cartas')}
                    className={getButtonClasses('cartas')}>
                    Cartas
               </button>
               <button
                    onClick={() => handleCategoryClick('otros')}
                    className={getButtonClasses('otros')}>
                    Otros
               </button>
          </div>
     );
}

export default CategoryBtn;
