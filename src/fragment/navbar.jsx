import React, { useState } from 'react';
import useMediaQuery from '../hooks/mediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu from '../assets/menu-icon.svg';
import close from '../assets/close-icon.svg';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? 'text-blue-500' : ''} hover:text-blue-500 transition duration-300`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  );
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-blue-500 text-white hover:text-blue-800 transtion duration-300  shadow-lg';
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">SYAHMA</h4>
        {/* isdekstop */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Bussines Owner" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Service" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Shipment" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button className="rounded-full bg-blue-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img alt="menu-icon" src={menu} />
          </button>
        )}
        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue-500 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={close} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Bussines Owner" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Service" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Shipment" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
