import React, { useState, useEffect } from 'react';
import { getData } from '../util/getData';

// Sample furniture data
// const furnitureData = [
//   { name: 'Sofa', material: 'Leather', price: 800, phone: '050-1234567', image: 'https://via.placeholder.com/150?text=Sofa' },
//   { name: 'Dining Table', material: 'Wood', price: 1200, phone: '050-2345678', image: 'https://via.placeholder.com/150?text=Dining+Table' },
//   { name: 'Bed', material: 'Metal', price: 1000, phone: '050-3456789', image: 'https://via.placeholder.com/150?text=Bed' },
//   // Add more furniture listings here
// ];


const Furniture = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [image, setImage] = useState(''); // לא חובה אם לא משמש בסינון
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    const getFurnitureData = async () => {
      try {
        let data = await getData('furniture');
        setFurnitureData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getFurnitureData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedMaterial('');
    setSelectedPrice('');
    setSelectedType('');
    setSelectedLocation('');
    setImage('');
  };

  const handleShowDetails = (furniture) => {
    setSelectedFurniture(furniture);
  };

  const handleClosePopup = () => {
    setSelectedFurniture(null);
  };

  const filteredFurniture = furnitureData
    .filter(item => (selectedMaterial ? item.material === selectedMaterial : true))
    .filter(item => (selectedPrice ? item.price <= parseInt(selectedPrice) : true))
    .filter(item => (selectedType ? item.type === selectedType : true))
    .filter(item => (selectedLocation ? item.location === selectedLocation : true))
    .filter(item => (image ? item.image.includes(image) : true));

    function getImageUrl(imgUrl) {
      return new URL(imgUrl, import.meta.url).href
    }


  return (
    <div className="p-6">
      {/* Filters */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by image URL..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex gap-4 mb-6 items-center">
        <div className="w-1/5">
          <select
            value={selectedMaterial}
            onChange={handleMaterialChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Material</option>
            <option value="Leather">Leather</option>
            <option value="Wood">Wood</option>
            <option value="Metal">Metal</option>
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Max Price</option>
            <option value="1200">1,200 ₪</option>
            <option value="1000">1,000 ₪</option>
            <option value="800">800 ₪</option>
            <option value="600">600 ₪</option>
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Type</option>
            <option value="Chair">Chair</option>
            <option value="Table">Table</option>
            <option value="Sofa">Sofa</option>
            {/* Add more types if needed */}
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Location</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Office">Office</option>
            {/* Add more locations if needed */}
          </select>
        </div>
        <div className="w-1/5">
          <input
            type="text"
            placeholder="Search by image URL..."
            value={image}
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleResetFilters}
          className="w-1/5 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>

      {/* Furniture Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFurniture.map((item, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md flex items-center space-x-4">
            <img src={getImageUrl(item.image)} alt={item.type} className="w-32 h-32 object-cover rounded-md" />
            <div>
              <p className="mb-1">Material: {item.material}</p>
              <p className="mb-1">Price: {item.price} ₪</p>
              <p className="mb-1">Type: {item.type}</p>
              <p className="mb-1">Location: {item.location}</p>
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

      {/* Popup */}
      {selectedFurniture && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{selectedFurniture.name}</h2>
            <img
              src={selectedFurniture.image}
              alt={selectedFurniture.name}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="mb-2">Material: {selectedFurniture.material}</p>
            <p className="mb-2">Price: {selectedFurniture.price} ₪</p>
            <p className="mb-2">Phone: {selectedFurniture.phone}</p>
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

export default Furniture;