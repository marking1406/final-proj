import React, { useState, useEffect } from 'react';
import { getData } from '../util/getData';
// Sample real estate data
// const realEstateData = [
//   { type: 'Apartment', location: 'Downtown', price: 120000, phone: '050-1234567', image: 'https://via.placeholder.com/150?text=Apartment' },
//   { type: 'House', location: 'Suburb', price: 250000, phone: '050-2345678', image: 'https://via.placeholder.com/150?text=House' },
//   { type: 'Condo', location: 'City Center', price: 180000, phone: '050-3456789', image: 'https://via.placeholder.com/150?text=Condo' },
//   // Add more real estate listings here
// ];

const RealEstate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null); // For popup



  const[realEstateData, setRealEstateData] = useState([]);

  useEffect (() => {
    const getRealEstates = async () => {
      try{
        let data = await getData('realEstate')
        setRealEstateData(data)
      }
      catch (err){
        console.log(err.message);
      }
    }
    getRealEstates();
  },[])





  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedPrice('');
  };

  const handleShowDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleClosePopup = () => {
    setSelectedProperty(null);
  };

  const filteredRealEstate = realEstateData
    .filter(item => item.type.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(item => (selectedLocation ? item.location === selectedLocation : true))
    .filter(item => (selectedPrice ? item.price <= parseInt(selectedPrice) : true));



    function getImageUrl(imgUrl) {
      return new URL(imgUrl, import.meta.url).href
    }



  return (
    <div className="p-6">
      {/* Filters */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by type..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex gap-4 mb-6 items-center">
        <div className="w-1/3">
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Location</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburb">Suburb</option>
            <option value="City Center">City Center</option>
            {/* Add more locations if needed */}
          </select>
        </div>
        <div className="w-1/3">
          <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Max Price</option>
            <option value="250000">250,000 ₪</option>
            <option value="200000">200,000 ₪</option>
            <option value="150000">150,000 ₪</option>
            <option value="100000">100,000 ₪</option>
            {/* Add more prices if needed */}
          </select>
        </div>
        <button
          onClick={handleResetFilters}
          className="w-1/3 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          All Options
        </button>
      </div>

      {/* Real Estate Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRealEstate.map((item, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md flex items-center space-x-4">
            <img src={getImageUrl(item.image)} alt={item.type} className="w-32 h-32 object-cover rounded-md" />
            <div>
              <h2 className="text-lg font-bold mb-2">{item.type}</h2>
              <p className="mb-1">Location: {item.location}</p>
              <p className="mb-1">Price: {item.price} ₪</p>
              <p>Phone: {item.phone}</p>
            </div>
            <button
              onClick={() => handleShowDetails(item)}
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Details
            </button>
          </div>
        ))}
      </div>
      {selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{selectedProperty.type}</h2>
            <img
              src={selectedProperty.image}
              alt={selectedProperty.type}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="mb-2">Location: {selectedProperty.location}</p>
            <p className="mb-2">Price: {selectedProperty.price} ₪</p>
            <p className="mb-2">Phone: {selectedProperty.phone}</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstate;
