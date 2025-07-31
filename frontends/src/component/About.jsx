import React from 'react';
import Footer from './Footer';
import ReviewForm from './Reviewform';
const About = () => {
  return (
    <>
    <section className="bg-gray-100 py-16 px-6 md:px-20 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-700 mb-6">About Pet Shelter</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          At <strong>Pet Shelter</strong>, we believe every animal deserves a second chance at life filled with love, care, and comfort.
          Founded with compassion at its core, we rescue, rehabilitate, and rehome abandoned, injured, or stray animals.
          Our shelter is more than just a refuge—it's a stepping stone to a better life for hundreds of animals each year.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-base">
              Our mission is to protect and advocate for animals in need by providing a safe, loving space until they
              find their forever homes. We also strive to raise awareness about animal welfare and promote responsible pet ownership.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
              <li>Rescue and shelter homeless or abused animals</li>
              <li>Provide medical treatment and vaccinations</li>
              <li>Facilitate adoptions and foster care programs</li>
              <li>Educate communities on animal care and rights</li>
              <li>Offer volunteer and donation opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ReviewForm/>
    <Footer/>
    </>
  );
};

export default About;
