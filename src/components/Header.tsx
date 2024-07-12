import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="flex justify-center items-center px-16 py-8 w-full text-base font-medium bg-neutral-50 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center w-full max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src={logo} alt="Company Logo" className="shrink-0 self-stretch my-auto aspect-[1.72] w-[55px]" />
        <nav className="flex gap-12 justify-between self-stretch my-auto text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? "text-brown-300" : "text-black hover:text-brown-100"
          }>
            Home</NavLink>
          <NavLink to="/explore"end className={({ isActive }) =>
            isActive ? "text-brown-300" : "text-black hover:text-brown-100"
          }>Explore</NavLink>
          <NavLink to="/rooms"end className={({ isActive }) =>
            isActive ? "text-brown-300" : "text-black hover:text-brown-100"
          }>Rooms</NavLink>
          <NavLink to="/about"end className={({ isActive }) =>
            isActive ? "text-brown-300" : "text-black hover:text-brown-100"
          }>About</NavLink>
          <NavLink to="/contact"end className={({ isActive }) =>
            isActive ? "text-brown-300" : "text-black hover:text-brown-100"
          }>Contact</NavLink>
        </nav>
        <button className="justify-center self-stretch px-12 py-6 text-white rounded-md bg-brown-100 max-md:px-5">
          Book now
        </button>
      </div>
    </header>
  );
};

export default Header;