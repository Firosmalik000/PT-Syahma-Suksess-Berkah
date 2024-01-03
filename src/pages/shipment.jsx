import React from 'react';
import useMediaQuery from '../hooks/mediaQuery';
import { motion } from 'framer-motion';
import ship from '../assets/ship.jpg';
import catalog from '../assets/catalog.pdf';
import SocialMediaIcons from '../component/socialMedia';

const Shipment = () => {
  const isAboveMeduimScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <div id="shipment" className="relative ">
      {' '}
      <div className=" w-full h-full md:bg-gradient-to-r bg-gradient-to-b from-black  to-none">
        <div className="h-screen w-5/6 mx-auto  ">
          <section className="md:flex  md:justify-between md:items-center md:h-full gap-16 py-full py-[100px] md:py-0  ">
            {/* image sections */}

            {/* main section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
              {/* heading */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                <p className="text-6xl font-playfair z-10 text-center   items-center flex  mx-auto justify-center md:justify-start">
                  <span
                    className="xs:relative  xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] md:text-center text-white  "
                  >
                    SHIPMENT
                  </span>
                </p>

                <p className="mt-10 mb-7 text-sm text-center md:text-justify text-white">
                  We can arrange for the shipment of goods that the buyer orders without using third-party services or shipping agents because our factory partners have their own shipping certification. This will alleviate the buyer's
                  burden in terms of ocean freight costs
                </p>
              </motion.div>
              <button className="btn bg-blue-500 text-white  px-5 py-3 rounded-xl hover:bg-blue-700 transition duration-300 mx-auto md:mx-0 block w-[300px] font-semibold">
                <a href={catalog} download={catalog}>
                  Download Catalog
                </a>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
