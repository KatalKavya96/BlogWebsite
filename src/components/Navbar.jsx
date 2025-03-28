import React from 'react';



const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="w-full h-16 bg-black flex items-center justify-between px-4 border border-white/50">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <img
        //   src="https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png"
          alt="Reddit Logo"
          className="h-8 w-8"
        />
        <span className="text-white text-xl font-bold ml-2">Internship</span>
      </div>

      {/* Center - Search Bar */}
      <div className="flex-grow mx-8">
        <input
          type="text"
          placeholder={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

          className="w-full max-w-lg h-10 rounded-full px-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Right Side - Buttons */}
      <div className="flex items-center gap-4">
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-full">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="white">
            <path d="M12 2a10 10 0 1 1-10 10A10.011 10.011 0 0 1 12 2zm4.7 7.3a1 1 0 0 0-1.4 0L12 12.6l-3.3-3.3a1 1 0 1 0-1.4 1.4l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.4z" />
          </svg>
          Get App
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full">Log In</button>
        <button className="text-white text-2xl">...</button>
      </div>
    </nav>
  );
};

export default Navbar;
