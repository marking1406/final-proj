import React, { useState, useEffect } from 'react';
import { getData } from '../util/getData';

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [vehicleData, setVehicleData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    const getCars = async () => {
      try {
        let data = await getData('vehicle');
        setVehicleData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCars();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedYear('');
    setSelectedPrice('');
    setSelectedManufacturer('');
    setSelectedType('');
  };

  const handleShowDetails = (car) => {
    setSelectedVehicle(car);
  };

  const handleClosePopup = () => {
    setSelectedVehicle(null);
  };

  const filteredCars = vehicleData.filter((car) => {
    const searchTermLower = searchTerm.toLowerCase();

    return (
      car.model.toLowerCase().includes(searchTermLower) ||
      car.company.toLowerCase().includes(searchTermLower) ||
      car.vehicle.toLowerCase().includes(searchTermLower) ||
      car.year.toString().includes(searchTermLower) ||
      car.price.toString().includes(searchTermLower)
    );
  })
    .filter((car) => (selectedYear ? car.year === parseInt(selectedYear) : true))
    .filter((car) => (selectedPrice ? car.price <= parseInt(selectedPrice) : true))
    .filter((car) => (selectedManufacturer ? car.company === selectedManufacturer : true))
    .filter((car) => (selectedType ? car.vehicle === selectedType : true));

  function getImageUrl(imgUrl) {
    return new URL(imgUrl, import.meta.url).href;
  }

  return (
    <div className="p-6"> {/* Removed max-w-4xl and mx-auto */}
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 items-center">
        <div className="w-1/5">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Max Price</option>
            <option value="150000">150,000 ₪</option>
            <option value="120000">120,000 ₪</option>
            <option value="100000">100,000 ₪</option>
            <option value="80000">80,000 ₪</option>
            <option value="60000">60,000 ₪</option>
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedManufacturer}
            onChange={handleManufacturerChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Manufacturer</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Nissan">Nissan</option>
            <option value="Mazda">Mazda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Kia">Kia</option>
            <option value="Ram">Ram</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Ducati">Ducati</option>
            <option value="Harley-Davidson">Harley-Davidson</option>
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
          </select>
        </div>
        <button
          onClick={handleResetFilters}
          className="w-1/5 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>

      {/* Car Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {filteredCars.map((car, index) => (
    <div key={index} className="p-4 border border-gray-300 rounded-md flex items-center space-x-4">
      {/* Car Image */}
      <img
        src={getImageUrl(car.image)}
        alt={car.model}
        className="w-32 h-32 object-cover rounded-md"
      />
      
      {/* Car Text */}
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-2">{car.model}</h2>
        <p className="mb-1">Year: {car.year}</p>
        <p className="mb-1">Price: {car.price} ₪</p>
        <p className="mb-1">Type: {car.vehicle}</p>
        <p>Manufacturer: {car.company}</p>
      </div>
      
      {/* Details Button */}
      <button
        onClick={() => handleShowDetails(car)}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Details
      </button>
    </div>
  ))}
</div>


      {/* Popup for Details */}
      {selectedVehicle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{selectedVehicle.model}</h2>
            <img
              src={getImageUrl(selectedVehicle.image)}
              alt={selectedVehicle.model}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="mb-2">Year: {selectedVehicle.year}</p>
            <p className="mb-2">Price: {selectedVehicle.price} ₪</p>
            <p className="mb-2">Type: {selectedVehicle.vehicle}</p>
            <p className="mb-2">Manufacturer: {selectedVehicle.company}</p>
            <p className="mb-2">Description: {selectedVehicle.description}</p>
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

export default Cars;
