import React, { useState, useEffect } from 'react';
import { getData } from '../util/getData';


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
  .filter(item => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      item.type.toLowerCase().includes(searchTermLower) || 
      item.city.toLowerCase().includes(searchTermLower) // Optionally, add other fields here
    );
  })
  .filter(item => (selectedLocation ? item.city === selectedLocation : true))
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
            <option value="Tel Aviv">Tel Aviv</option>
            <option value="Herzliya">Herzliya</option>
            <option value="Caesarea">Caesarea</option>
            <option value="Jerusalem">Jerusalem</option>
            <option value="Netanya">Netanya</option>
            <option value="Ramat Hasharon">Ramat Hasharon</option>
            <option value="Haifa">Haifa</option>
            <option value="Rishon LeZion">Rishon LeZion</option>
            <option value="Ofakim">Ofakim</option>
            <option value="Bat Yam">Bat Yam</option>
            <option value="Ashdod">Ashdod</option>
            <option value="Eilat">Eilat</option>
          </select>
        </div>
        <div className="w-1/3">
        <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Max Price</option>
            <option value="2000000">2,000,000 ₪</option>
            <option value="4000000">4,000,000 ₪</option>
            <option value="6000000">6,000,000 ₪</option>
            <option value="8000000">8,000,000 ₪</option>
            <option value="10000000">10,000,000 ₪</option>
            <option value="15000000">15,000,000 ₪</option>
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
              <p>type: {item.type}</p>
              <p className="mb-1">Location: {item.city}</p>
              <p className="mb-1">Price: {item.price} ₪</p>
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
              src={getImageUrl(selectedProperty.image)}
              alt={selectedProperty.type}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="mb-2">Location: {selectedProperty.city}</p>
            <p className="mb-2">Price: {selectedProperty.price} ₪</p>
            <p className='mb-2'>address: {selectedProperty.address}</p>
            <p className="mb-2">description: {selectedProperty.description}</p>
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
