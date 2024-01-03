import LineGradient from '../component/LineGradient';
import { motion } from 'framer-motion';
import project1 from '../assets/1.png';
import project2 from '../assets/2.png';
import project3 from '../assets/3.png';
import project4 from '../assets/4.png';
import project5 from '../assets/5.png';
import project6 from '../assets/6.png';
import project8 from '../assets/7.png';
import project7 from '../assets/8.png';

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

const Project = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto pt-3`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative  ">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">We offer charcoal briquettes of excellent quality, ensuring that our customers receive reliable and efficient products.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project2 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">We provide competitive pricing options to ensure that our customers get the best value for their money.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project3 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">We prioritize prompt and timely delivery of our products to meet the deadlines and requirements of our customers.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project4 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">Our dedicated customer support team is available to assist customers with any inquiries, concerns, or requests they may have.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project5 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">We strive to build long-term partnerships with our customers, fostering trust and reliability in our business relationships.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project6 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">We offer customization options to cater to specific requirements and preferences of our customers.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project7 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7"> We prioritize transparency and honesty in all our business transactions, ensuring a trustworthy and reliable trading experience.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};
const Project8 = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-x-hidden overflow-y-auto md:pt-1 pt-[150px]`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">We provide after-sales support and assistance to address any issues or concerns that may arise after the purchase.</p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};

const Service = () => {
  return (
    <section id="service" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue-500">SER</span>VICES
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Our Service</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div className="sm:grid sm:grid-cols-3" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue-500 text-white
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            OUR SERVICE
          </div>
          <Project src={project1} title="High-Quality Products" />
          <Project2 src={project2} title="Competitive Pricing" />

          {/* ROW 2 */}
          <Project3 src={project3} title="Timely Delivery" />
          <Project4 src={project4} title="Customer Support" />
          <Project5 src={project5} title="Long-Term Partnership" />

          {/* ROW 3 */}
          <Project6 src={project6} title="Customization Options" />
          <Project7 src={project7} title="Transparent and Honest" />
          <Project8 src={project8} title="After-Sales Service" />
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
