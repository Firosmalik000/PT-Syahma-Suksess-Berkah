import React from 'react';
import useMediaQuery from '../hooks/mediaQuery';
import { motion } from 'framer-motion';
import profile from '../assets/1.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../component/socialMedia';

const Landing = ({ setSelected }) => {
  const isAboveMeduimScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <div id="home" className="h-screen ">
      <section className="md:flex  md:justify-between md:items-center md:h-full gap-16 py-full  ">
        {/* image sections */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
          {isAboveMeduimScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:top-20 before:left-20 before:w-full before:max-w-[400px] before:h-full before:border-2  before:z-[-1]">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                <img src={profile} alt="profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
              </motion.div>
            </div>
          ) : (
            <div>
              <img src={profile} alt="profile" className="hover:filter hover:saturate-200 transition duration-300 z-10 w-full max-w-[400px] md:max-w-[600px] pt-20" />
            </div>
          )}
        </div>

        {/* main section */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* heading */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <p className="text-4xl md:text-6xl font-playfair z-10 text-center md:text-start">
              SYAHMA {'  '}{' '}
              <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
          "
              >
                BRIQUETTE CHARCOAL
              </span>
            </p>

            <p className="mt-10 mb-7 text-sm text-center md:text-start">BEST PARTNER IN CHARCOAL TRADING</p>
          </motion.div>

          {/* call to actions */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            <AnchorLink className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500" onClick={() => setSelected('contact')} href="#contact">
              Contact Me
            </AnchorLink>
          </motion.div>
          <motion.div
            className="flex mt-2 md:mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
