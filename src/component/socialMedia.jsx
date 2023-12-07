import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleFill } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a className="hover:scale-110 transition duration-300 text-5xl" href="#" target="_blank " rel="noreferrer">
        <FaInstagram />
      </a>
      <a className="hover:scale-110 transition duration-300 text-5xl" href="#" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
      <a className="hover:scale-110 transition duration-300 text-5xl" href="#" target="_blank" rel="noreferrer">
        <RiFacebookCircleFill />
      </a>
    </div>
  );
};

export default SocialMedia;
