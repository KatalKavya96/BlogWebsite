import React, { useState } from 'react'
import "../index.css"

const RightBar = () => {
  const [followStates, setFollowStates] = useState({
    YashRaghuvanshi: false,
    SatyaYadav: false,
    AnkitPandey: false,
    Pratyush: false,
    ChaitanyaS: false,
  });

  const toggleFollow = (username) => {
    setFollowStates(prev => ({
      ...prev,
      [username]: !prev[username]
    }));
  };

  return (
    <>
      <div className='h-[43vh] w-90 fixed top-2 right-2 border border-white/20 mt-[70px] overflow-y-scroll text-white p-[15px] rounded-lg custom-scroll-hide bg-adder shadow-[-5px_10px_15px_2px_rgba(0,0,0,0.5)]'>
        <div className='h-15 text-xl font-bold mt-[5px]'>Who to follow</div>

        {[
          { username: 'YashRaghuvanshi' },
          { username: 'SatyaYadav' },
          { username: 'AnkitPandey' },
          { username: 'Pratyush' },
          { username: 'ChaitanyaS' }
        ].map(user => (
          <div key={user.username} className="flex items-center justify-between gap-[10px] mt-[5px] mb-[10px]">
            <div className='flex items-center gap-[5px]'>
              <svg className="w-12 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15Z" />
              </svg>
              <h1>@{user.username}</h1>
            </div>
            <div
              onClick={() => toggleFollow(user.username)}
              className={`h-10 w-25 border rounded-3xl flex justify-center items-center transition duration-200 cursor-pointer hover:scale-101 ${
                followStates[user.username]
                  ? 'bg-green-600 text-white border-white/40'
                  : 'bg-transparent text-white border-white/40 hover:bg-green-600'
              }`}
            >
              {followStates[user.username] ? 'Following' : 'Follow'}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RightBar;
