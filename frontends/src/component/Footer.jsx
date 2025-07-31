import React from 'react'
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate()
  const handleDonate=()=>{
    navigate("/donate")
  }
  return (
    <footer className="bg-[#1f2024] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

     
        <div>
          <h1 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <img src="logo.png" alt="paw" className="w-6 h-6" />
          </h1>
          <p className="text-sm mb-6">
            Together we can make this world a better place for our nonhuman companions, one day at a time, one animal at a time! Donate Now!
          </p>
          <button onClick={()=>handleDonate()}
          className="bg-amber-700 mt-5 text-white text-base px-6 py-3 rounded-xl hover:bg-amber-800 transition active:scale-95">
          Donate Now
          </button>
        </div>

  
        <div>
          <h2 className="text-lg font-semibold mb-3">CONTACTS</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">📍 Jaipur, India</li>
            <li className="flex items-center gap-2">✉️ <a href="#" className="hover:underline">Contact Us</a></li>
            <li className="flex items-center gap-2">📞 1800 102 8032</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">DISCOVER</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQ’s</a></li>
            <li><a href="#" className="hover:underline">Animal Protection Laws</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Become a Volunteer</a></li>
            <li><a href="#" className="hover:underline">Report an Animal in Distress</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">DONORS</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">One Day Meal Programme</a></li>
            <li><a href="#" className="hover:underline">CSR Donations</a></li>
            <li><a href="#" className="hover:underline">Donate in Honor</a></li>
            <li><a href="#" className="hover:underline">Sponsor a Dog</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
