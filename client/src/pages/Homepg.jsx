import React from "react";
import pc from "../../assets/img/pcImg.png";
import businessIcon from "../../assets/img/buisnessIcon.png";
import carIcon from "../../assets/img/carIcon.png";
import animalIcon from "../../assets/img/animalIcon.png";

function Homepg() {
  const categories = [
    { imgSrc: businessIcon, label: "עסקים למכירה" },
    { imgSrc: carIcon, label: "רכבים" },
    { imgSrc: animalIcon, label: "חיות מחמד" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen bg-gray-100 text-gray-900">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className="bg-white h-full p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center shadow-lg">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-700">
            How does it work?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-600">
            Discover how our platform connects buyers and sellers in the most
            efficient way possible.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-6 space-y-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex flex-col items-center focus:outline-none transform transition duration-300 hover:scale-110"
              >
                <img
                  src={category.imgSrc}
                  alt={category.label}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain mb-4"
                />
                <span className="text-lg font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-gray-200 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className="relative h-full w-full md:w-auto md:h-auto max-h-96 max-w-full md:max-h-full p-6">
          <img src={pc} alt="PC" className="object-contain w-full h-full shadow-2xl rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Homepg;
