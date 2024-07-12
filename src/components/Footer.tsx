import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
    <footer className="flex flex-col lg:text-left px-16 pt-20 pb-14 mt-24 w-full text-justify justify-center bg-brown-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-around flex-footer">
        <div className="basis-1/4 flex flex-col font-bold  text-white">
          <div className="text-3xl font-dancing">Paradise view</div>
          <div className="mt-5 text-xs text-justify">
            The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)
          </div>
        </div>
        <div className="basis-1/4 flex justify-between mt-1.5 text-xs font-bold text-white">
          <div className="flex flex-col">
            <div className="text-base">Quick links</div>
            <Link to="/booking" className="mt-6">Room booking</Link>
            <Link to="/rooms" className="mt-3">Rooms</Link>
            <Link to="/contact" className="mt-4">Contact</Link>
            <Link to="/explore" className="mt-4">Explore</Link>
          </div>
        </div>
        <div className="basis-1/4 flex justify-between mt-1.5 text-xs font-bold text-white">
          <div className="flex flex-col">
            <div className="text-base">Company</div>
            <Link to="/privacy" className="mt-6">Privacy policy</Link>
            <Link to="/refund" className="mt-3">Refund policy</Link>
            <Link to="/faq" className="mt-4">F.A.Q</Link>
            <Link to="/about" className="mt-4">About</Link>
          </div>
          </div>
          <div className="basis-1/4 flex mt-1.5 justify-between text-xs font-bold text-white">
            <div className="flex flex-col">
              <div className="text-base">Social media</div>
              <a href="https://facebook.com" className="mt-6">Facebook</a>
              <a href="https://twitter.com" className="mt-3">Twitter</a>
              <a href="https://instagram.com" className="mt-4">Instagram</a>
              <a href="https://linkedin.com" className="mt-4">Linkedin</a>
            </div>
        </div>
      </div>
      <div className="shrink-0 mt-10 h-0.5 bg-white w-full" />
      <div className="center-start text-center text-white mt-10 text-base font-semibold max-md:mt-1 max-md:ml-2.5">
        Paradise view 2023
      </div>
    </footer>
  </>
  );
};

export default Footer;