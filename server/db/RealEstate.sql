CREATE TABLE real_estate (
  id INT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(20) NOT NULL,
  city VARCHAR(30) NOT NULL,
  address VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(250) NULL
);

INSERT INTO real_estate (type, city, address, price, image) VALUES
('Apartment', 'Tel Aviv', 'Dizengoff St 123', 2300000, 'https://example.com/tel-aviv-apartment.jpg'),
('Penthouse', 'Herzliya', 'Ramat Yam St 7', 7800000, 'https://example.com/herzliya-penthouse.jpg'),
('Villa', 'Caesarea', 'Golf Course 12', 15000000, 'https://example.com/caesarea-villa.jpg'),
('Apartment', 'Jerusalem', 'King George St 45', 3200000, 'https://example.com/jerusalem-apartment.jpg'),
('Penthouse', 'Netanya', 'Herzl St 34', 5200000, 'https://example.com/netanya-penthouse.jpg'),
('Villa', 'Ramat Hasharon', 'Hadekel St 22', 8500000, 'https://example.com/ramat-hasharon-villa.jpg'),
('Apartment', 'Haifa', 'Ben Gurion Blvd 8', 1600000, 'https://example.com/haifa-apartment.jpg'),
('Penthouse', 'Rishon LeZion', 'Sderot Rothschild 10', 6900000, 'https://example.com/rishon-penthouse.jpg'),
('Villa', 'Ofakim', 'HaPalmach St 5', 9200000, 'https://example.com/raanana-villa.jpg'),
('Apartment', 'Bat Yam', 'Balfour St 29', 1800000, 'https://example.com/bat-yam-apartment.jpg'),
('Penthouse', 'Ashdod', 'HaNassi Blvd 15', 6000000, 'https://example.com/ashdod-penthouse.jpg'),
('Villa', 'Eilat', 'Coral Beach 3', 13000000, 'https://example.com/eilat-villa.jpg');
