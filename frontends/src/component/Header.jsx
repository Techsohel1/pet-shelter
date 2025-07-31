import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate("/donate");
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}
      </style>

      <header className="bg-black text-white font-[Inter] shadow-md z-50 relative">
        <div className="flex items-center justify-between px-5 py-4 md:py-6">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold flex items-center gap-2"
          >
            <img
              src="logo.png"
              alt="Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="hidden sm:block">Pet Shelter</span>
          </Link>


          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-amber-500 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold hover:text-amber-500 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold hover:text-amber-500 transition"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={handleDonate}
              className="bg-amber-700 text-white px-5 py-2 text-base rounded-xl hover:bg-amber-800 transition active:scale-95"
            >
              Donate Now
            </button>
          </div>

          
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-6 transition-all">
            <Link
              to="/"
              className="text-base font-semibold hover:text-amber-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-semibold hover:text-amber-500"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-base font-semibold hover:text-amber-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            
            <button
              onClick={() => {
                handleDonate();
                setMenuOpen(false);
              }}
              className="bg-amber-700 text-white text-base px-5 py-2 rounded-xl hover:bg-amber-800 transition active:scale-95"
            >
              Donate Now
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
