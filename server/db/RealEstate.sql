USE imy2;
DROP TABLE IF EXISTS real_estate;

CREATE TABLE real_estate (
  id INT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(20) NOT NULL,
  city VARCHAR(30) NOT NULL,
  address VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(250) NULL,
  description VARCHAR(250) NOT NULL
);

INSERT INTO real_estate (type, city, address, price, image,description) VALUES
    ('Apartment', 'Tel Aviv', 'Dizengoff St 123', 2300000, '../assets/img/realEstateImg/Apartment1.jpeg', 'A modern apartment in the heart of Tel Aviv on Dizengoff Street, offering urban living with easy access to shops, cafes, and the beach.'),
    ('Penthouse', 'Herzliya', 'Ramat Yam St 7', 7800000, '../assets/img/realEstateImg/Penthouse1.jpeg', 'A luxurious penthouse in Herzliya with stunning sea views, located on the prestigious Ramat Yam Street.'),
    ('Villa', 'Caesarea', 'Golf Course 12', 15000000, '../assets/img/realEstateImg/Villa1.jpeg', 'A magnificent villa located near the Caesarea Golf Course, offering a private and lavish lifestyle.'),
    ('Apartment', 'Jerusalem', 'King George St 45', 3200000, '../assets/img/realEstateImg/Apartment2.jpeg', 'A spacious apartment in the center of Jerusalem, located on the iconic King George Street with easy access to cultural landmarks.'),
    ('Penthouse', 'Netanya', 'Herzl St 34', 5200000, '../assets/img/realEstateImg/Penthouse2.jpeg', 'A stylish penthouse in Netanya, located on Herzl Street with panoramic views of the city and sea.'),
    ('Villa', 'Ramat Hasharon', 'Hadekel St 22', 8500000, '../assets/img/realEstateImg/Villa2.jpeg', 'A luxurious villa in Ramat Hasharon, surrounded by greenery and offering a private, exclusive living experience.'),
    ('Apartment', 'Haifa', 'Ben Gurion Blvd 8', 1600000, '../assets/img/realEstateImg/Apartment3.jpeg', 'A cozy apartment in the heart of Haifa, located on Ben Gurion Boulevard with close proximity to cultural and historical sites.'),
    ('Penthouse', 'Rishon LeZion', 'Sderot Rothschild 10', 6900000, '../assets/img/realEstateImg/Penthouse3.jpeg', 'An elegant penthouse in Rishon LeZion, located on Sderot Rothschild with stunning cityscape views.'),
    ('Villa', 'Ofakim', 'HaPalmach St 5', 9200000, '../assets/img/realEstateImg/Villa3.jpeg', 'A beautiful villa in Ofakim, offering spacious living areas and a quiet residential environment.'),
    ('Apartment', 'Bat Yam', 'Balfour St 29', 1800000, '../assets/img/realEstateImg/Apartment4.jpeg', 'A charming apartment in Bat Yam, located on Balfour Street, close to the beach and local amenities.'),
    ('Penthouse', 'Ashdod', 'HaNassi Blvd 15', 6000000, '../assets/img/realEstateImg/Penthouse4.jpeg', 'A modern penthouse in Ashdod with breathtaking views of the sea, located on HaNassi Boulevard.'),
    ('Villa', 'Eilat', 'Coral Beach 3', 13000000, '../assets/img/realEstateImg/Villa4.jpeg', 'A stunning beachfront villa in Eilat, located on Coral Beach, perfect for those seeking luxury and proximity to the Red Sea.')
