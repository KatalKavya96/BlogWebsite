import React from 'react';



const Navbar = ({ searchTerm, setSearchTerm }) => {

  return (

    <nav className="w-full h-16 bg-black flex items-center justify-center p-[30px] border border-white/50 fixed z-50">
      
      <div className="flex items-center justify-center">
        <svg class="fixed top-2 left-8 w-12 opacity-80 hover:scale-105 transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15Z"></path></svg>
      </div>

      <div className="flex-grow ml-[32%]">
        <input type="text" value={searchTerm} placeholder='Search Countries' onChange={(e) => setSearchTerm(e.target.value)} className="w-full max-w-lg h-10 rounded-full px-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"/>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-white text-l font-medium ml-[64px] border border-white/20 p-[7px] rounded-3xl bg-white/15">@KavyaKatal</span>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:scale-105 transition duration-100">Log In</button>
      </div>

    </nav>
  );
};

export default Navbar;
