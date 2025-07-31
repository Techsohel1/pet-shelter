import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()
  const handleDonate=()=>{
    navigate('/donate')
  }
  return (
    <>
      
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}
      </style>

      <div className="relative w-full h-screen font-[Inter]">
        
        <img
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          src="https://images.unsplash.com/photo-1641474366643-c0df7491f3c1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dogs"
        />

      
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-10 md:px-20 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Your support helps us save precious lives!
          </h1>
          <button onClick={()=>handleDonate()}
          className="mt-6 bg-amber-700 text-white text-base sm:text-lg px-5 py-2 rounded-xl hover:bg-amber-800 transition active:scale-95">
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
