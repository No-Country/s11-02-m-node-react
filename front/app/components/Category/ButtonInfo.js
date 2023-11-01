import React from 'react';

function ButtonInfo({ text }) {
     return (
          <button className="p-1 px-4  bg-[#D5ECB8] absolute lg:bottom-4 rounded-full bottom-2 right-2 lg:right-auto">
               {text}
          </button>
     );
}

export default ButtonInfo;
