import React, { useState } from 'react';
import "../index.css"

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="relative h-screen">

      <svg onClick={() => setIsOpen(!isOpen)} className={`fixed top-28 z-50 w-10 h-10 bg-black opacity-80 cursor-pointer p-2 rounded-full transition-all duration-300 ${isOpen ? 'left-2' : 'left-75'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 11V8L16 12L12 16V13H8V11H12Z" /><circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" /></svg>
    
        <div className={`fixed top-0 left-0 h-full mt-[64px] overflow-y-scroll bg-black/60 border-b border-white/40 border-r border-white/40 transition-all duration-300 ease-in-out   ${isOpen ? 'w-0' : 'w-80 overflow-hidden custom-scroll-hide'}`}>

            <div className="flex flex-col text-white gap-6 p-6">

            <nav className="flex flex-col gap-3 justify-center items-center">
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10">Home</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10">Recent</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10">Saved</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10">Settings</a>
            </nav>

            <div className="mt-auto pt-10 border-t border-white/20">
                <p className="text-sm opacity-60">Logged in as <strong>admin</strong></p>
            </div>

            </div>

        </div>
    </div>

  );
};

export default Slider;
