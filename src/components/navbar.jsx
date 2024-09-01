import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
<nav className="flex items-center justify-between bg-secondary-100 p-6 w-full h-20">
  {/* Navigation logo and title */}
  <div className="flex items-center flex-shrink-0 text-gray-300 mr-6 justify-start">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c-1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8 7.2 6.3 10.8 13.5 10.8 10.8 0 12.15-8.1 17.55-9.45 3.6-.9 6.75-.45 9.45 4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-3xl tracking-tight">Elites Lions Security</span>
  </div>
  {/* Hamburger menu for mobile */}
  <div className="block lg:hidden text-gray-600" onClick={toggleMenu}>
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
   {/* Navigation links */}
   <div className={`lg:flex ${showMenu ? 'block' : 'hidden'} justify-end`}>
    <div className="text-lg flex justify-end space-x-10">
      {/* Home link */}
      <a href="#home" className="text-gray-300 font-bold hover:text-primary hover:scale-110">
        Home
      </a>
      {/* About link */}
      <a href="#about" className="text-gray-300 font-bold hover:text-primary hover:scale-110">
        About
      </a>
      {/* Services link */}
      <a href="#services" className="text-gray-300 font-bold hover:text-primary hover:scale-110">
        Services
      </a>
      {/* Contact button */}
      <button className="bg-primary text-secondary-100 font-bold px-3 rounded hover:bg-secondary-200 hover:scale-110">
        Contact
      </button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;