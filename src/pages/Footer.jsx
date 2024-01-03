import React from 'react';
import SocialMedia from '../component/socialMedia';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="h-[200px] w-5/6 mx-auto  text-white flex justify-between">
      <motion.div>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Footer;
