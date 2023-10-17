import React from 'react';
import Image from 'next/image';
import Description from './Description';

function Info() {
     return (
          <div className="flex justify-center items-center lg: mx-16 my-8 lg:my-16 lg:flex-nowrap flex-wrap lg:gap-0 gap-8">
               <Description
                    img="/Frame1.svg"
                    text="Tengo un producto que ya no quiero"
               />
               <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="hidden lg:block ml-4 mr-4"
               />
               <Description
                    img="/Frame2.svg"
                    text="Lo subasto en  ‘’Eco subasta’’"
               />
               <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="hidden lg:block ml-4 mr-4"
               />
               <Description
                    img="/Frame3.svg"
                    text="Lo subaste y colabore al mediambniente"
               />
          </div>
     );
}

export default Info;
