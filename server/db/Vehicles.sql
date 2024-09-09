USE imy2;
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
 id INT NULL PRIMARY KEY AUTO_INCREMENT,
 vehicle VARCHAR(20) NOT NULL,
 company VARCHAR(20) not null, 
 model VARCHAR(30) not null, 
 year YEAR NOT NULL,
 price INT NOT NULL,
 image VARCHAR(250) NULL,
description VARCHAR(250) NOT NULL
);

INSERT INTO vehicles (vehicle, company, model, year, price, image,description) VALUES
    ('Car', 'Toyota', 'Corolla', 2020, 85000, '../assets/img/vehicleImg/toyota.jpeg', 'The Toyota Corolla 2020 is a reliable and fuel-efficient car, perfect for city driving and long-distance commutes. It offers a smooth ride, advanced safety features, and low maintenance costs.'),
    ('Truck', 'Ford', 'F-150', 2018, 120000, '../assets/img/vehicleImg/ford.jpeg', 'The Ford F-150 2018 is a powerful and versatile truck, ideal for heavy-duty tasks and off-road adventures. It boasts impressive towing capacity, a spacious interior, and rugged durability.'),
    ('Motorcycle', 'Harley-Davidson', 'Iron 883', 2019, 75000, '../assets/img/vehicleImg/Harley-Davidson.jpeg', 'The Harley-Davidson Iron 883 2019 is a classic cruiser with a sleek, aggressive design. It delivers an exciting ride with its strong engine, making it perfect for enthusiasts who appreciate style and performance.'),
    ('Car', 'Honda', 'Civic', 2021, 95000, '../assets/img/vehicleImg/honda.jpeg', 'The Honda Civic 2021 is a stylish and practical car that combines efficiency with advanced technology. Known for its reliability and performance, it is a great choice for both daily commutes and long trips.'),
    ('Truck', 'Chevrolet', 'Silverado', 2017, 115000, '../assets/img/vehicleImg/Chevrolet.jpeg', 'The Chevrolet Silverado 2017 is a rugged and dependable truck with excellent towing and payload capabilities. It is built for tough jobs and offers a comfortable cabin with modern tech features.'),
    ('Motorcycle', 'Yamaha', 'MT-07', 2020, 60000, '../assets/img/vehicleImg/Yamaha.jpeg', 'The Yamaha MT-07 2020 is a nimble and powerful motorcycle, known for its lightweight frame and agile handling. It’s a favorite among riders who enjoy both city commuting and spirited weekend rides.'),
    ('Car', 'Mazda', 'CX-5', 2022, 145000, '../assets/img/vehicleImg/Mazda.jpeg', 'The Mazda CX-5 2022 is a luxurious compact SUV that combines stylish design with dynamic performance. It features advanced safety technology, a comfortable interior, and sporty handling.'),
    ('Car', 'Hyundai', 'Elantra', 2019, 80000, '../assets/img/vehicleImg/Hyundai.jpeg', 'The Hyundai Elantra 2019 is a compact sedan with excellent fuel efficiency and a host of tech features. It’s a reliable choice for those looking for a budget-friendly vehicle with modern conveniences.'),
    ('Truck', 'Ram', '1500', 2021, 130000, '../assets/img/vehicleImg/Ram.jpeg', 'The Ram 1500 2021 is a highly capable truck with a luxurious interior and impressive towing power. It’s ideal for both work and leisure, offering a smooth ride and advanced technology.'),
    ('Motorcycle', 'Ducati', 'Monster 821', 2018, 95000, '../assets/img/vehicleImg/Ducati.jpeg', 'The Ducati Monster 821 2018 is a powerful naked bike that combines performance and style. With its sporty look and responsive engine, it offers an exhilarating riding experience.'),
    ('Car', 'Kia', 'Sportage', 2023, 135000, '../assets/img/vehicleImg/Kia.jpeg', 'The Kia Sportage 2023 is a modern SUV that offers a balance of comfort, technology, and performance. It’s ideal for families and adventurers looking for a reliable vehicle with plenty of space and features.'),
    ('Truck', 'Nissan', 'Titan', 2019, 125000, '../assets/img/vehicleImg/Nissan.jpeg', 'The Nissan Titan 2019 is a rugged full-size truck with impressive towing and hauling capabilities. It’s perfect for tough jobs, offering a comfortable interior and advanced safety features.')