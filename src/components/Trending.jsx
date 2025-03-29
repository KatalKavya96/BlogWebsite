import React from 'react'
import Card from "./Card.jsx"
import "../index.css"
const Trending = () => {
  return (
    
    <>
<div className='h-[42vh] w-90 fixed bottom-4 right-2 border border-white/30  mt-[70px] overflow-y-scroll text-white p-[15px] rounded-lg custom-scroll-hide bg-adder shadow-[-5px_10px_15px_2px_rgba(0,0,0,0.5)]'>
            
            <div className='h-15 text-xl font-bold mt-[5px]'>Trending</div>

            <div className="flex flex-col   justify-between items-center gap-[4px] mt-[5px] mb-[10px] ">

                    <h1 className='h-8 w-60 text-xl font-medium opacity-90 border-t border-t-white/40 border-b border-b-white/40 flex justify-center items-center hover:bg-white/20 mb-[10px] bg-white/8 cursor-pointer'>#Ireland<span></span></h1>
                    <h1 className='h-8 w-60 text-xl font-medium opacity-90 border-t border-t-white/40 border-b border-b-white/40 flex justify-center items-center hover:bg-white/20 mt-[10px] mb-[10px] bg-white/8 cursor-pointer'>#Grenada<span></span></h1>
                    <h1 className='h-8 w-60 text-xl font-medium opacity-90 border-t border-t-white/40 border-b border-b-white/40 flex justify-center items-center hover:bg-white/20 mt-[10px] mb-[10px] bg-white/8 cursor-pointer'>#SouthKorea<span></span></h1>
                    <h1 className='h-8 w-60 text-xl font-medium opacity-90 border-t border-t-white/40 border-b border-b-white/40 flex justify-center items-center hover:bg-white/20 mt-[10px] mb-[10px] bg-white/8 cursor-pointer'>#Switzerland<span></span></h1>

                
            </div>

        </div>    </>

  )
}

export default Trending