import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const classIcon = 'hover:scale-110 transition duration-300 md:text-5xl text-4xl';
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex justify-center md:justify-start my-10 gap-7">
      <motion.a variants={projectVariant} className={classIcon} href="#" target="_blank " rel="noreferrer">
        <FaInstagram />
      </motion.a>
      <motion.a variants={projectVariant} className={classIcon} href="#" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </motion.a>
      <motion.a variants={projectVariant} className={classIcon} href="#" target="_blank" rel="noreferrer">
        <RiFacebookCircleFill />
      </motion.a>
    </motion.div>
  );
};

export default SocialMedia;
