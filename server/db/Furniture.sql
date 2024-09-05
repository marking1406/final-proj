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
('Spa Table', 'Wood', 3500, 'Tel Aviv', 'https://example.com/spa-table.jpg'),
('Office Chair', 'Leather', 1200, 'Jerusalem', 'https://example.com/office-chair.jpg'),
('Dining Table', 'Glass', 4500, 'Haifa', 'https://example.com/dining-table.jpg'),
('Sofa', 'Fabric', 6000, 'Rishon LeZion', 'https://example.com/sofa.jpg'),
('Coffee Table', 'Metal', 850, 'Herzliya', 'https://example.com/coffee-table.jpg'),
('Bed Frame', 'Wood', 2000, 'Netanya', 'https://example.com/bed-frame.jpg'),
('Bookshelf', 'Particle Board', 700, 'Eilat', 'https://example.com/bookshelf.jpg'),
('Recliner', 'Leather', 3200, 'Ashdod', 'https://example.com/recliner.jpg'),
('Wardrobe', 'MDF', 2700, 'Petah Tikva', 'https://example.com/wardrobe.jpg'),
('Outdoor Bench', 'Teak Wood', 1500, 'Bat Yam', 'https://example.com/outdoor-bench.jpg'),
('Bar Stool', 'Metal and Wood', 600, 'Raanana', 'https://example.com/bar-stool.jpg'),
('TV Stand', 'Glass and Metal', 1100, 'Beersheba', 'https://example.com/tv-stand.jpg');
