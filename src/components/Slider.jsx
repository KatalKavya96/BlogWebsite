import React, { useState } from 'react';
import "../index.css"

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="relative h-screen ">

      <svg onClick={() => setIsOpen(!isOpen)} className={`fixed top-28 z-50 w-9 h-9 bg-black/70 cursor-pointer p-1 rounded-full transition-all duration-300 ${isOpen ? 'left-2' : 'left-85.5'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 11V8L16 12L12 16V13H8V11H12Z" /><circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" /></svg>
    
        <div className={`fixed top-0 left-0 h-full mt-[64px] overflow-y-scroll  border-b border-white/20 border-r border-white/20 transition-all duration-300 ease-in-out bg-adder shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]    ${isOpen ? 'w-0' : 'w-90 overflow-hidden custom-scroll-hide'}`}>

            <div className="flex flex-col text-white gap-6 p-6">

            <nav className="flex flex-col gap-4 justify-center items-center">
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10 shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Home</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10 shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Recent</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10 shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Popular</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10 shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Communities</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10 shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Saved</a>
                <a href="#" className="w-70 flex justify-center items-center hover:bg-white/15 p-2 rounded-lg transition bg-white/5 border border-white/10 shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Settings</a>
            </nav>

            <div className="mt-auto pt-10 border-t border-white/20">
                <p className="text-sm opacity-60">Logged in as <strong>admin</strong></p>
            </div>

            </div>

            <div className='w-90 h-25 border-t border-t-white/10 border-r border-r-white/10 fixed bottom-0 left-0 flex justify-between items-center p-[20px]'>
              <div className='flex justify-center items-center gap-2'>
                <div className="h-14 w-14 flex items-center justify-center rounded-full  bg-purple-600 text-white/90 cursor-pointer shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">KK</div>
                <div className='flex flex-col items-center justify-center'>
                  <div className='text-lg font-bold text-white/90 cursor-pointer'>Kavya Katal</div>
                  <div className='text-small text-white/40 cursor-pointer'>@kavyakatal09</div>
                </div>
              </div>
              <div className='h-8 w-8 text-white cursor-pointer'>
                <svg className='opacity-80 cursor-pointer' fill="white" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
              </div>
            </div>

        </div>

        
    </div>

  );
};

export default Slider;
