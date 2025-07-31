import React from 'react'
import Footer from './Footer'


const Contact = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1583786693544-e352f898888d?w=600&auto=format&fit=crop&q=60"
            alt="Shelter Animal"
            className="rounded-lg w-full h-auto object-cover shadow-md"
          />
        </div>

        <div className="text-gray-800 space-y-6">
          <p className="text-lg leading-relaxed">
            In case of any query or doubt, kindly call <strong>Pet Shelter Welfare Trust</strong>. 
            We’d also be happy to have you at our shelter to meet and spend time with our amazing rescued dogs.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">📞 Call Us</h2>
            <p className="text-lg font-medium">1800 102 8032</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">🚗 Visit Us</h2>
            <p className="text-lg font-medium">Jaipur, India</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">🕛 Visiting Hours</h2>
            <p className="text-lg font-medium">Mon-Sun 11am-4pm </p>
          </div>
        </div>
      </div>
    </section>
        
        <Footer/>
    </>
  )
}

export default Contact
