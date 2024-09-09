USE imy2;
DROP TABLE IF EXISTS furniture;

CREATE TABLE furniture (
  id INT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(30) NOT NULL,
  material VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  location VARCHAR(50) NOT NULL,
  image VARCHAR(250) NULL,
  description VARCHAR(200) NOT NULL
);

INSERT INTO furniture (type, material, price, location, image, description)  
VALUES
('Spa Table', 'Wood', 3500, 'Tel Aviv', 'https://example.com/spa-table.jpg', 'A luxury spa table with a sturdy wooden frame and a comfortable cushion. Perfect for relaxation treatments.'),
('Office Chair', 'Leather', 1200, 'Jerusalem', 'https://example.com/office-chair.jpg', 'Ergonomic office chair with high-quality leather upholstery. Provides excellent lumbar support for long work hours.'),
('Dining Table', 'Glass', 4500, 'Haifa', 'https://example.com/dining-table.jpg', 'Modern glass dining table with a sleek design, ideal for any contemporary home setting. Seats six comfortably.'),
('Sofa', 'Fabric', 6000, 'Rishon LeZion', 'https://example.com/sofa.jpg', 'A spacious and soft fabric sofa, perfect for cozy family gatherings or lounging with friends. Comes in multiple color options.'),
('Coffee Table', 'Metal', 850, 'Herzliya', 'https://example.com/coffee-table.jpg', 'Stylish metal coffee table with a minimalist design, perfect for adding a modern touch to your living room.'),
('Bed Frame', 'Wood', 2000, 'Netanya', 'https://example.com/bed-frame.jpg', 'Sturdy wooden bed frame with a classic design. Suitable for queen-sized mattresses. Easy to assemble.'),
('Bookshelf', 'Particle Board', 700, 'Eilat', 'https://example.com/bookshelf.jpg', 'Compact bookshelf with five shelves, perfect for organizing books, decor, or storage boxes.'),
('Recliner', 'Leather', 3200, 'Ashdod', 'https://example.com/recliner.jpg', 'Luxurious leather recliner with adjustable settings for maximum comfort. Ideal for movie nights or relaxation.'),
('Wardrobe', 'MDF', 2700, 'Petah Tikva', 'https://example.com/wardrobe.jpg', 'Spacious wardrobe with multiple compartments and hanging space. Made of durable MDF with a modern finish.'),
('Outdoor Bench', 'Teak Wood', 1500, 'Bat Yam', 'https://example.com/outdoor-bench.jpg', 'Beautiful teak wood outdoor bench, weather-resistant and perfect for any garden or patio area.'),
('Bar Stool', 'Metal and Wood', 600, 'Raanana', 'https://example.com/bar-stool.jpg', 'Elegant bar stool with a mix of metal and wood elements. Perfect for kitchen counters or bar areas.'),
('TV Stand', 'Glass and Metal', 1100, 'Beersheba', 'https://example.com/tv-stand.jpg', 'Contemporary TV stand made of glass and metal, with ample space for electronics and media accessories.');

