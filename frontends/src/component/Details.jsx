import React from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate()
  const handleDonate=()=>{
    navigate("/donate")
  }
  return (
    <section className="bg-[#ffeff2] min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-10">
     
      <div className="lg:w-1/2 w-full max-w-xl mb-10 lg:mb-0 lg:ml-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
          Helped animals so far
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          We believe every animal deserves love, care, and a forever home. Our mission is to rescue, rehabilitate, and
          rehome abandoned, abused, and stray animals. Whether you're looking to adopt a loyal companion, foster a furry
          friend, or support our work through donations and volunteering, you're helping us give animals a second
          chance at life.
        </p>
        <button onClick={()=>handleDonate()}
        className="bg-amber-700 text-white text-base px-6 py-3 rounded-xl hover:bg-amber-800 transition active:scale-95">
          Donate Now
        </button>
      </div>

      
      <div className="lg:w-1/2 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        
        <div className="flex gap-4 items-start">
          <img
            src="https://sarvoham.org/wp-content/uploads/2020/08/icon-box_05.png"
            alt="Healthy Food"
            className="w-16 h-16 mt-1"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Healthy Food</h3>
            <p className="text-gray-600 mt-2 text-base">
              It's a daily struggle to arrange more than 1000 kg of pet food for our 180+ shelter animals every month.
              Help us by buying food for our dogs!
            </p>
          </div>
        </div>

       
        <div className="flex gap-4 items-start">
          <img
            src="https://sarvoham.org/wp-content/uploads/2020/08/icon-box_06.png"
            alt="Water Bowls"
            className="w-16 h-16 mt-1"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Street Water Bowls</h3>
            <p className="text-gray-600 mt-2 text-base">
              Every year, many street animals die of thirst and dehydration. Help us distribute water bowls to the
              local community.
            </p>
          </div>
        </div>

        
        <div className="flex gap-4 items-start">
          <img
            src="https://sarvoham.org/wp-content/uploads/2020/08/icon-box_07.png"
            alt="Medical Help"
            className="w-16 h-16 mt-1"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Medical Help</h3>
            <p className="text-gray-600 mt-2 text-base">
              So many dogs suffer on the streets of Bangalore with treatable injuries or diseases. Help us give them
              essential medical care.
            </p>
          </div>
        </div>

       
        <div className="flex gap-4 items-start">
          <img
            src="https://sarvoham.org/wp-content/uploads/2020/08/icon-box_08.png"
            alt="Support"
            className="w-16 h-16 mt-1"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Support</h3>
            <p className="text-gray-600 mt-2 text-base">
              By supporting Sarvoham, you are saving the lives of innocent street animals and giving them a second
              chance at happiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
