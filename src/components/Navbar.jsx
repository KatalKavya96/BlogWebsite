import React from 'react';
import "../index.css"



const Navbar = ({ searchTerm, setSearchTerm }) => {

  return (

    <nav className="w-full h-16  flex items-center justify-center p-[30px] border border-white/20 fixed z-50 bg-adder shadow-[2px_2px_15px_1px_rgba(0,0,0,0.3)]">
      
      <div className="h-10 w-10 flex items-center justify-center rounded-full  bg-purple-600 text-white/90 cursor-pointer shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">KK</div>

      <div className="w-80 flex-grow ml-[24%] flex justify-center items-center">
        <input type="text" value={searchTerm} placeholder='Search Countries' onChange={(e) => setSearchTerm(e.target.value)} className="w-full max-w-lg h-10 rounded-full px-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"/>
      </div>

      <div className="flex items-center gap-4">

        <span className="text-white text-l font-medium ml-[64px] border border-white/20 p-[7px] rounded-3xl bg-orange-800 text-white/90 cursor-pointer shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">@KavyaKatal</span>
        <svg className="w-10 h-10 text-white rounded-full p-2 hover:bg-white/10 transition duration-200 ease-in-out cursor-pointer" rpl="" fill="currentColor" height="20" icon-name="chat-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.61 19.872a10.013 10.013 0 0 0 6.51-4.035A9.999 9.999 0 0 0 12.275.264c-1.28-.3-2.606-.345-3.903-.132a10.05 10.05 0 0 0-8.25 8.311 9.877 9.877 0 0 0 1.202 6.491l-1.24 4.078a.727.727 0 0 0 .178.721.72.72 0 0 0 .72.19l4.17-1.193A9.87 9.87 0 0 0 9.998 20c.54 0 1.079-.043 1.612-.128ZM1.558 18.458l1.118-3.69-.145-.24A8.647 8.647 0 0 1 1.36 8.634a8.778 8.778 0 0 1 7.21-7.27 8.765 8.765 0 0 1 8.916 3.995 8.748 8.748 0 0 1-2.849 12.09 8.763 8.763 0 0 1-3.22 1.188 8.68 8.68 0 0 1-5.862-1.118l-.232-.138-3.764 1.076ZM6.006 9a1.001 1.001 0 0 0-.708 1.707A1 1 0 1 0 6.006 9Zm4.002 0a1.001 1.001 0 0 0-.195 1.981 1 1 0 1 0 .195-1.98Zm4.003 0a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003Z"></path></svg>
        <svg className='w-10 h-10 text-white rounded-full p-2 hover:bg-white/10 transition duration-200 ease-in-out cursor-pointer' rpl="" fill="currentColor" height="20" icon-name="notification-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 18h1a2 2 0 0 1-4 0h3Zm8-3.792v.673A1.12 1.12 0 0 1 17.883 16H2.117A1.12 1.12 0 0 1 1 14.881v-.673a3.947 3.947 0 0 1 1.738-3.277A2.706 2.706 0 0 0 3.926 8.7V7.087a6.07 6.07 0 0 1 12.138 0l.01 1.613a2.7 2.7 0 0 0 1.189 2.235A3.949 3.949 0 0 1 19 14.208Zm-1.25 0a2.7 2.7 0 0 0-1.188-2.242A3.956 3.956 0 0 1 14.824 8.7V7.088a4.819 4.819 0 1 0-9.638 0v1.615a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.198 2.239v.542h15.5v-.542Z"></path></svg>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full  transition duration-100 cursor-pointer text-white/90 cursor-pointer shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]">Admin</button>
      </div>

    </nav>
  );
};

export default Navbar;
