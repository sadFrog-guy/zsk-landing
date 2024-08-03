import React, { useState } from 'react';
import { navItems } from './../../utils/consts';
import NavItem from './NavItem';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative show-on-mobile">
      <div
        className={`flex flex-col items-center justify-center w-12 h-12 cursor-pointer z-50`}
        onClick={toggleMenu}
      >
        <div
          className={`w-8 h-0.5 bg-current transform transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-current my-1 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-current transform transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-[0.25rem]' : ''
          }`}
        ></div>
      </div>
      <nav
        className={`fixed z-50 top-[12vh] right-0 h-[88.1vh] bg-white shadow-lg w-48 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-[101%]'}`}
      >
        <ul className="flex flex-col">
            {navItems.map(item => {
                return (
                <NavItem height="40" href={item.link} key={item.title}>
                    {item.title}
                </NavItem>
                )
            })}
        </ul>
      </nav>
        <div
            onClick={toggleMenu}
            className={`${!isOpen && 'hidden'} fixed top-[12vh] left-0 bg-black opacity-80 w-full h-[88.1vh] z-20`}
        >
        </div>
    </div>
  );
};

export default BurgerMenu;