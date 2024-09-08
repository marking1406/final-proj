import React, { useState, useEffect } from 'react';
import { getData } from '../util/getData';
// Sample car data with additional fields and images
// const carsData = [
//   { model: 'Toyota Corolla', year: 2020, price: 15000, phone: '050-1234567', manufacturer: 'Toyota', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Toyota+Corolla' },
//   { model: 'Honda Civic', year: 2019, price: 16000, phone: '050-2345678', manufacturer: 'Honda', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Honda+Civic' },
//   { model: 'Ford Focus', year: 2018, price: 14000, phone: '050-3456789', manufacturer: 'Ford', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Ford+Focus' },
//   { model: 'Chevrolet Malibu', year: 2021, price: 17000, phone: '050-4567890', manufacturer: 'Chevrolet', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Chevrolet+Malibu' },
//   { model: 'Nissan Altima', year: 2019, price: 15500, phone: '050-5678901', manufacturer: 'Nissan', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Nissan+Altima' },
//   { model: 'BMW 3 Series', year: 2020, price: 22000, phone: '050-6789012', manufacturer: 'BMW', type: 'Private Car', image: 'https://via.placeholder.com/150?text=BMW+3+Series' },
//   { model: 'Audi A4', year: 2018, price: 21000, phone: '050-7890123', manufacturer: 'Audi', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Audi+A4' },
//   { model: 'Mercedes-Benz C-Class', year: 2021, price: 24000, phone: '050-8901234', manufacturer: 'Mercedes-Benz', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Mercedes-Benz+C-Class' },
//   { model: 'Hyundai Elantra', year: 2022, price: 14500, phone: '050-9012345', manufacturer: 'Hyundai', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Hyundai+Elantra' },
//   { model: 'Kia Forte', year: 2019, price: 13500, phone: '050-0123456', manufacturer: 'Kia', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Kia+Forte' },
//   { model: 'Subaru Impreza', year: 2021, price: 16000, phone: '050-1234568', manufacturer: 'Subaru', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Subaru+Impreza' },
//   { model: 'Volkswagen Jetta', year: 2020, price: 15000, phone: '050-2345679', manufacturer: 'Volkswagen', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Volkswagen+Jetta' },
//   { model: 'Harley-Davidson Sportster', year: 2021, price: 12000, phone: '050-3456789', manufacturer: 'Harley-Davidson', type: 'Motorcycle', image: 'https://via.placeholder.com/150?text=Harley-Davidson+Sportster' },
//   { model: 'Honda CR-V', year: 2020, price: 20000, phone: '050-4567890', manufacturer: 'Honda', type: 'SUV', image: 'https://via.placeholder.com/150?text=Honda+CR-V' },
//   { model: 'Ford F-150', year: 2021, price: 30000, phone: '050-5678901', manufacturer: 'Ford', type: 'Commercial Vehicle', image: 'https://via.placeholder.com/150?text=Ford+F-150' },
//   { model: 'Dodge Charger', year: 2019, price: 22000, phone: '050-6789012', manufacturer: 'Dodge', type: 'Sports Car', image: 'https://via.placeholder.com/150?text=Dodge+Charger' },
//   { model: 'Toyota Land Cruiser', year: 2022, price: 35000, phone: '050-7890123', manufacturer: 'Toyota', type: 'SUV', image: 'https://via.placeholder.com/150?text=Toyota+Land+Cruiser' },
//   { model: 'Chevrolet Express', year: 2021, price: 28000, phone: '050-8901234', manufacturer: 'Chevrolet', type: 'Commercial Vehicle', image: 'https://via.placeholder.com/150?text=Chevrolet+Express' },
// ];

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const[vehicleData, setVehicleData] = useState([]);

useEffect (() => {
  const getCars = async () => {
    try{
      let data = await getData('/Vehicle')
      setVehicleData(data)
    }
    catch (err){
      console.log(err.message);
    }
  }
  getCars();
},[])

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

  const filteredCars = vehicleData
    .filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(car => (selectedYear ? car.year === parseInt(selectedYear) : true))
    .filter(car => (selectedPrice ? car.price <= parseInt(selectedPrice) : true))
    .filter(car => (selectedManufacturer ? car.manufacturer === selectedManufacturer : true))
    .filter(car => (selectedType ? car.type === selectedType : true));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by model..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex gap-4 mb-6 items-center">
        <div className="w-1/5">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            {/* Add more years if needed */}
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Max Price</option>
            <option value="30000">30,000 ₪</option>
            <option value="25000">25,000 ₪</option>
            <option value="20000">20,000 ₪</option>
            <option value="15000">15,000 ₪</option>
            <option value="10000">10,000 ₪</option>
            {/* Add more prices if needed */}
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
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Kia">Kia</option>
            <option value="Subaru">Subaru</option>
            <option value="Volkswagen">Volkswagen</option>
            {/* Add more manufacturers if needed */}
          </select>
        </div>
        <div className="w-1/5">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Private Car">Private Car</option>
            <option value="SUV">SUV</option>
            <option value="Commercial Vehicle">Commercial Vehicle</option>
            <option value="Sports Car">Sports Car</option>
            {/* Add more vehicle types if needed */}
          </select>
        </div>
        <button
          onClick={handleResetFilters}
          className="w-1/5 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >            
          All Options
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.map((car, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md flex items-center space-x-4">
            <img src={car.image} alt={car.model} className="w-32 h-32 object-cover rounded-md" />
            <div>
              <h2 className="text-lg font-bold mb-2">{car.model}</h2>
              <p className="mb-1">Year: {car.year}</p>
              <p className="mb-1">Price: {car.price} ₪</p>
              <p className="mb-1">Type: {car.type}</p>
              <p>Phone: {car.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
