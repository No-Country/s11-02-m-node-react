import React from 'react';

function Description({
     img = 'https://placehold.co/150',
     title = 'Title',
     text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}) {
     return (
          <div className="flex flex-col justify-center items-center  ">
               <img src={img} alt="img" className="rounded-full" />
               <div className="flex flex-col items-center justify-center p-4 gap-2">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg text-center ">{text}</p>
               </div>
          </div>
     );
}

export default Description;
