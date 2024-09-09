USE imy2;
DROP TABLE IF EXISTS furniture;

CREATE TABLE furniture (
  id INT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(30) NOT NULL,
  material VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  location VARCHAR(50) NOT NULL,
  image VARCHAR(250) NULL
);

INSERT INTO furniture (type, material, price, location, image) VALUES
('Spa Table', 'Wood', 3500, 'Tel Aviv', '../assets/img/furnitureImg/Spa Table.jpeg'),
('Office Chair', 'Leather', 1200, 'Jerusalem', '../assets/img/furnitureImg/Office Chair.jpeg'),
('Dining Table', 'Glass', 4500, 'Haifa', '../assets/img/furnitureImg/Dining Table.jpeg'),
('Sofa', 'Fabric', 6000, 'Rishon LeZion', '../assets/img/furnitureImg/Sofa.jpeg'),
('Coffee Table', 'Metal', 850, 'Herzliya', '../assets/img/furnitureImg/Coffee Table.jpeg'),
('Bed Frame', 'Wood', 2000, 'Netanya', '../assets/img/furnitureImg/Bed Frame.jpeg'),
('Bookshelf', 'Particle Board', 700, 'Eilat', '../assets/img/furnitureImg/Bookshelf.jpeg'),
('Recliner', 'Leather', 3200, 'Ashdod', '../assets/img/furnitureImg/Recliner.jpeg'),
('Wardrobe', 'MDF', 2700, 'Petah Tikva', '../assets/img/furnitureImg/Wardrobe.jpeg'),
('Outdoor Bench', 'Teak Wood', 1500, 'Bat Yam', '../assets/img/furnitureImg/Outdoor Bench.jpeg'),
('Bar Stool', 'Metal and Wood', 600, 'Raanana', '../assets/img/furnitureImg/Bar Stool.jpeg'),
('TV Stand', 'Glass and Metal', 1100, 'Beersheba', '../assets/img/furnitureImg/TV Stand.jpeg');
