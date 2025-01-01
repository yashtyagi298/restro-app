import React, { useState } from 'react';
import Logo from './Logo';
import MenuIcons from './icons/MenuIcons';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/Instagram';
import Close from './icons/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  const phoneNumber = "+916201972182"; 
  const message = "Hello! I would like to inquire about your services."; 

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="py-4 max-md:px-4 border-b">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div
          className={`max-md:absolute z-50 left-0 w-screen max-md:min-h-[40vh] bg-white max-md:p-8 flex max-md:border-t items-center justify-center max-md:transition max-md:duration-300 ${
            isOpen
              ? 'max-md:translate-y-0 max-md:top-24 max-md:opacity-100'
              : 'max-md:-translate-y-full max-md:top-0 max-md:opacity-0'
          }`}
        >
          <ul className="flex flex-col md:flex-row justify-center gap-x-14 font-medium max-md:w-full">
            <li>
              <Link
                to="/"
                onClick={closeNav}
                className="text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                onClick={closeNav}
                className="text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0"
              >
                Menu
              </Link>
            </li>
            <li>
              <a
                href={whatsappUrl}
                onClick={closeNav}
                className="text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={closeNav}
                className="text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0"
                href='#about-us'
              >
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-end gap-x-4 xl:gap-x-10 w-auto z-20 lg:w-40">
          <a href="https://www.facebook.com/profile.php?id=61571539645512&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FacebookIcon color="black" />
          </a>
          <a href="https://www.instagram.com/hiralaldirasoi" target="_blank" rel="noopener noreferrer">
            <InstagramIcon color="black" />
          </a>
          {/* Mobile menu trigger */}
          <button className="md:hidden flex justify-center" onClick={toggleNav}>
            {isOpen ? (
              <Close className="w-6 h-6 cursor-pointer" color="black" />
            ) : (
              <MenuIcons className="w-6 h-6 cursor-pointer" color="black" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
