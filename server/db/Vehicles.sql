USE imy2;
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
 id INT NULL PRIMARY KEY AUTO_INCREMENT,
 vehicle VARCHAR(20) NOT NULL,
 company VARCHAR(20) not null, 
 model VARCHAR(30) not null, 
 year YEAR NOT NULL,
 price INT NOT NULL,
 type VARCHAR (10),
 image VARCHAR(250) NULL

);

INSERT INTO vehicles (vehicle, company, model, year, price, type, image) VALUES
('Car', 'Toyota', 'Corolla', 2020, 85000, 'private', '../assets/img/vehicleImg/toyota.jpeg'),
('Truck', 'Ford', 'F-150', 2018, 120000, 'leasing', '../assets/img/vehicleImg/ford.jpeg'),
('Motorcycle', 'Harley-Davidson', 'Iron 883', 2019, 75000, 'private', '../assets/img/vehicleImg/Harley-Davidson.jpeg'),
('Car', 'Honda', 'Civic', 2021, 95000, 'leasing', '../assets/img/vehicleImg/honda.jpeg'),
('Truck', 'Chevrolet', 'Silverado', 2017, 115000, 'private', '../assets/img/vehicleImg/Chevrolet.jpeg'),
('Motorcycle', 'Yamaha', 'MT-07', 2020, 60000, 'leasing', '../assets/img/vehicleImg/Yamaha.jpeg'),
('Car', 'Mazda', 'CX-5', 2022, 145000, 'private', '../assets/img/vehicleImg/Mazda.jpeg'),
('Car', 'Hyundai', 'Elantra', 2019, 80000, 'leasing', '../assets/img/vehicleImg/Hyundai.jpeg'),
('Truck', 'Ram', '1500', 2021, 130000, 'private', '../assets/img/vehicleImg/Ram.jpeg'),
('Motorcycle', 'Ducati', 'Monster 821', 2018, 95000, 'leasing', '../assets/img/vehicleImg/Ducati.jpeg'),
('Car', 'Kia', 'Sportage', 2023, 135000, 'private', '../assets/img/vehicleImg/Kia.jpeg'),
('Truck', 'Nissan', 'Titan', 2019, 125000, 'leasing', '../assets/img/vehicleImg/Nissan.jpeg');

--     const carsData = [
--   { model: 'Toyota Corolla', year: 2020, price: 15000, phone: '050-1234567', company: 'Toyota', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Toyota+Corolla' },
--   { model: 'Honda Civic', year: 2019, price: 16000, phone: '050-2345678', company: 'Honda', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Honda+Civic' },
--   { model: 'Ford Focus', year: 2018, price: 14000, phone: '050-3456789', company: 'Ford', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Ford+Focus' },
--   { model: 'Chevrolet Malibu', year: 2021, price: 17000, phone: '050-4567890', company: 'Chevrolet', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Chevrolet+Malibu' },
--   { model: 'Nissan Altima', year: 2019, price: 15500, phone: '050-5678901', company: 'Nissan', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Nissan+Altima' },
--   { model: 'BMW 3 Series', year: 2020, price: 22000, phone: '050-6789012', company: 'BMW', type: 'Private Car', image: 'https://via.placeholder.com/150?text=BMW+3+Series' },
--   { model: 'Audi A4', year: 2018, price: 21000, phone: '050-7890123', company: 'Audi', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Audi+A4' },
--   { model: 'Mercedes-Benz C-Class', year: 2021, price: 24000, phone: '050-8901234', company: 'Mercedes-Benz', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Mercedes-Benz+C-Class' },
--   { model: 'Hyundai Elantra', year: 2022, price: 14500, phone: '050-9012345', company: 'Hyundai', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Hyundai+Elantra' },
--   { model: 'Kia Forte', year: 2019, price: 13500, phone: '050-0123456', company: 'Kia', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Kia+Forte' },
--   { model: 'Subaru Impreza', year: 2021, price: 16000, phone: '050-1234568', company: 'Subaru', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Subaru+Impreza' },
--   { model: 'Volkswagen Jetta', year: 2020, price: 15000, phone: '050-2345679', company: 'Volkswagen', type: 'Private Car', image: 'https://via.placeholder.com/150?text=Volkswagen+Jetta' },
--   { model: 'Harley-Davidson Sportster', year: 2021, price: 12000, phone: '050-3456789', company: 'Harley-Davidson', type: 'Motorcycle', image: 'https://via.placeholder.com/150?text=Harley-Davidson+Sportster' },
--   { model: 'Honda CR-V', year: 2020, price: 20000, phone: '050-4567890', company: 'Honda', type: 'SUV', image: 'https://via.placeholder.com/150?text=Honda+CR-V' },
--   { model: 'Ford F-150', year: 2021, price: 30000, phone: '050-5678901', company: 'Ford', type: 'Commercial Vehicle', image: 'https://via.placeholder.com/150?text=Ford+F-150' },
--   { model: 'Dodge Charger', year: 2019, price: 22000, phone: '050-6789012', company: 'Dodge', type: 'Sports Car', image: 'https://via.placeholder.com/150?text=Dodge+Charger' },
--   { model: 'Toyota Land Cruiser', year: 2022, price: 35000, phone: '050-7890123', company: 'Toyota', type: 'SUV', image: 'https://via.placeholder.com/150?text=Toyota+Land+Cruiser' },
--   { model: 'Chevrolet Express', year: 2021, price: 28000, phone: '050-8901234', company: 'Chevrolet', type: 'Commercial Vehicle', image: 'https://via.placeholder.com/150?text=Chevrolet+Express' },
-- ];