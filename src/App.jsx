import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/mediaQuery';
import Navbar from './fragment/navbar';

import Landing from './pages/landing';
import Owner from './pages/Owner';
import LineGradient from './component/LineGradient';
import { motion } from 'framer-motion';
import About from './pages/About';
import Service from './pages/Service';
import Shipment from './pages/shipment';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="app  ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
      <div className="w-5/6 mx-auto md:h-full ">
        <Landing setSelectedPage={setSelectedPage} />
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setSelectedPage('bussines owner')}>
            <Owner />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setSelectedPage('projects')}>
            <About />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setSelectedPage('projects')}>
            <Service />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setSelectedPage('projects')}>
            <Shipment />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
