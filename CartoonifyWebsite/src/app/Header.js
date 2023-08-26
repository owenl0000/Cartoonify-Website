"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeLg,
  faImage,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";


import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center h-20 bg-blue-900 text-turquoise-400 font-trend lg:px-10 md:px-4 sm:px-2">
      <div className="flex items-center">
        <h6 className="text-4xl m-0 mb-4 lg:text-4xl md:text-3xl sm:text-2xl">Cartoonify</h6>
      </div>
      <nav className="flex gap-6 items-center mr-16 text-sm">
        {/* For large screens */}
        <a href="/" className="font-trend mb-2 lg:inline hidden">Home</a>
        <a href="/gallery" className="font-trend mb-2 lg:inline hidden">Gallery</a>
        <a href="#about" className="font-trend mb-2 lg:inline hidden">About</a>
        <a href="#service" className="font-trend mb-2 lg:inline hidden">Service</a>
        <a href="#tutorial" className="font-trend mb-2 lg:inline hidden">Tutorial</a>
        <a href="#contact" className="font-trend mb-2 lg:inline hidden">Contact</a>
        <a href="/cartoonize" className="font-trend bg-turquoise text-off-white border pb-3 px-1 p-2 cursor-pointer rounded-md flex items-center lg:inline hidden">
          Cartoonize
        </a>

        {/* For small screens */}
        <a href="/" className="lg:hidden">
          <FontAwesomeIcon icon={faHomeLg} style={{ fontSize: 20, color: '#40E0D0' }}/>
        </a>
        <a href="/gallery" className="lg:hidden">
          <FontAwesomeIcon icon={faImage} style={{ fontSize: 20, color: '#40E0D0' }}/>
        </a>
        <a href="/cartoonize" className="bg-turquoise text-off-white border pb-3 px-1 p-2 cursor-pointer rounded-md flex items-center lg:hidden">
          <FontAwesomeIcon icon={faPaintbrush} style={{ fontSize: 20, color: '#F5F5F5' }}/>
        </a>
      </nav>
    </header>
  );
}

export default Header;
