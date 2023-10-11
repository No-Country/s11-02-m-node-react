import React from 'react';
import Description from './Description';
function Info() {
     return (
          <div className="flex justify-center items-center lg:mx- mx-16 my-8 lg:my-16 lg:flex-nowrap flex-wrap lg:gap-0 gap-8">
               <Description />
               <img src="/arrow.svg" alt="arrow" className="hidden lg:block" />
               <Description />
               <img src="/arrow.svg" alt="arrow" className="hidden lg:block" />
               <Description />
          </div>
     );
}

export default Info;
