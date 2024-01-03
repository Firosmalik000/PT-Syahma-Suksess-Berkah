import React from 'react';

import { image } from '../data';

const Slide = () => {
  return (
    <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide py-[100px]">
      {image.map((item, index) => (
        <img key={index} src={item} alt="slide" className="w-[300px] h-[300px] object-cover rounded-xl border-2  border-blue-400 p-2" />
      ))}
    </div>
  );
};

export default Slide;
