USE imy2;
DROP TABLE IF EXISTS real_estate;

CREATE TABLE real_estate (
  id INT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(20) NOT NULL,
  city VARCHAR(30) NOT NULL,
  address VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(250) NULL
);

INSERT INTO real_estate (type, city, address, price, image) VALUES
('Apartment', 'Tel Aviv', 'Dizengoff St 123', 2300000, '../assets/img/realEstateImg/Apartment1.jpeg'),
('Penthouse', 'Herzliya', 'Ramat Yam St 7', 7800000, '../assets/img/realEstateImg/Penthouse1.jpeg'),
('Villa', 'Caesarea', 'Golf Course 12', 15000000, '../assets/img/realEstateImg/Villa1.jpeg'),
('Apartment', 'Jerusalem', 'King George St 45', 3200000, '../assets/img/realEstateImg/Apartment2.jpeg'),
('Penthouse', 'Netanya', 'Herzl St 34', 5200000, '../assets/img/realEstateImg/Penthouse2.jpeg'),
('Villa', 'Ramat Hasharon', 'Hadekel St 22', 8500000, '../assets/img/realEstateImg/Villa2.jpeg'),
('Apartment', 'Haifa', 'Ben Gurion Blvd 8', 1600000, '../assets/img/realEstateImg/Apartment3.jpeg'),
('Penthouse', 'Rishon LeZion', 'Sderot Rothschild 10', 6900000, '../assets/img/realEstateImg/Penthouse3.jpeg'),
('Villa', 'Ofakim', 'HaPalmach St 5', 9200000, '../assets/img/realEstateImg/Villa3.jpeg'),
('Apartment', 'Bat Yam', 'Balfour St 29', 1800000, '../assets/img/realEstateImg/Apartment4.jpeg'),
('Penthouse', 'Ashdod', 'HaNassi Blvd 15', 6000000, '../assets/img/realEstateImg/Penthouse4.jpeg'),
('Villa', 'Eilat', 'Coral Beach 3', 13000000, '../assets/img/realEstateImg/Villa4.jpeg');
