import React from 'react';
import Image from 'next/image';
import frame1 from '@/public/Frame1.png';
import frame2 from '@/public/Frame2.png';
import frame3 from '@/public/Frame3.png';
//import Description from './Description';

function Info() {
     return (
          <div className="flex justify-center items-center lg:mx- mx-16 my-8 lg:my-16 lg:flex-nowrap flex-wrap lg:gap-0 gap-8">
               <Image src={frame1} alt="Frame 1" className="md:w-56 md:h-56" />
               {/* <Description /> */}
               <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="hidden lg:block ml-4 mr-4"
               />
               <Image src={frame2} alt="Frame 2" className="md:w-56 md:h-56" />
               {/* <Description /> */}
               <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="hidden lg:block ml-4 mr-4"
               />
               <Image src={frame3} alt="Frame 3" className="md:w-56 md:h-56" />
               {/* <Description /> */}
          </div>
     );
}

export default Info;
