import React, { forwardRef } from 'react';

const Notifications = forwardRef(({ isVisible }, ref) => {
    
  const base = 'w-85 h-120 border border-white/20 fixed top-16 right-4 bg-black/90 text-white/80 p-5 flex justify-center items-center rounded-xl z-40 transition-all duration-300 ease-in-out transform';
  const visible = isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none';

  return (
    <section ref={ref} className={`${base} ${visible}`}>
      No notifications yet
    </section>
  );
});

export default Notifications;
