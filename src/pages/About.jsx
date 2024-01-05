import LineGradient from '../component/LineGradient';
import useMediaQuery from '../hooks/mediaQuery';
import { motion } from 'framer-motion';
import skills from '../assets/service.jpg';

const MySkills = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-10 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red"> US</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-5 text-justify indent-8 ">
            SYAHMA SUCCESS BERKAH, established and experienced since 2021, initially formed and focused on the production of charcoal briquettes and became a supplier in Indonesia. We are purposely formed to increase our sales and
            production factory. Now, we are introducing a new innovation in the field of charcoal briquettes trading company, ready to establish long-term partnership with our customers and buyer. Our principle is to sell products at low
            prices that are directly distributed by us factory.rs and build their trust in us as a desired supplier. With a capacity of 500 metric tons per month in each factory.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              w-[650px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="about" className="z-10" src={skills} />
            </div>
          ) : (
            <img alt="about" className="z-10" src={skills} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-center gap-16 mt-16 ">
        {/* EXPERIENCE */}

        <motion.div
          className="md:w-1/3 mt-10 bg-blue-500 px-6 py-8 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-12">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3 text-center">Vision</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">Become a trusted and trustworthy trader charcoal briquette company by provide the best service to customers and buyers, and for establish long-term cooperation.</p>
        </motion.div>

        {/* INNOVATIVE */}

        <motion.div
          className="md:w-1/3 mt-10 bg-red px-6 py-8 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-12">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3 text-center">Mission</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            To gain the trust of global buyers in need of charcoal briquette products in their countries, offering competitive prices and excellent quality, and providing a solution to the concerns of buyers who have been deceived by
            unscrupulous parties.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
