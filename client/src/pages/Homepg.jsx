import React from "react";
import pc from "../assets/img/pcImg.png";
import { useNavigate } from "react-router-dom";
import Realestate from "../assets/img/house.png";
import carIcon from "../assets/img/carIcon.png";
import sofa from "../assets/img/furniture.png";

function Homepg() {
  const navigate = useNavigate();
  const categories = [
    { imgSrc: Realestate, label: "Real Estate" ,path :'/RealEstate'},
    { imgSrc: carIcon, label: "Vehicles" ,path :'/Vehicle' },
    { imgSrc: sofa, label: "Furniture" ,path:'/Furniture' },
  ];
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen bg-gray-100 text-gray-900 overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className="bg-white h-full p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-lg">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-red-800">
            Welcome to Our Second-Hand Marketplace!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-600">
            Find the best deals on vehicles, furniture, and real estate all in one place. 
            To get started, just press one of the buttons below and explore our collection!
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-6 space-y-6">
          {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(category.path)}
                className="flex flex-col items-center focus:outline-none transform transition duration-300 hover:scale-110"
              >
                <img
                  src={category.imgSrc}
                  alt={category.label}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-contain mb-4"
                />
                <span className="text-xl font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className="relative h-full w-full md:w-auto md:h-auto max-h-96 max-w-full md:max-h-full p-6">
          <img
            src={pc}
            alt="PC"
            className="object-contain w-full h-full shadow-2xl rounded-lg transform transition duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepg;
