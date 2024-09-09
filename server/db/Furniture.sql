USE imy2;
DROP TABLE IF EXISTS furniture;

CREATE TABLE furniture (
  id INT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(30) NOT NULL,
  material VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  location VARCHAR(50) NOT NULL,
  area VARCHAR(20) NOT NULL,
  image VARCHAR(250) NULL,
  description VARCHAR(250) NOT NULL
);

INSERT INTO furniture (type, material, price, location, area, image, description) VALUES
    ('Spa Table', 'Wood', 3500, 'Tel Aviv', 'Central', '../assets/img/furnitureImg/Spa Table.jpeg', 'A luxurious wooden spa table, perfect for creating a relaxing atmosphere in any home or spa.'),
    ('Office Chair', 'Leather', 1200, 'Jerusalem', 'Central', '../assets/img/furnitureImg/Office Chair.jpeg', 'A comfortable leather office chair, designed for ergonomic support and style.'),
    ('Dining Table', 'Glass', 4500, 'Haifa', 'North', '../assets/img/furnitureImg/Dining Table.jpeg', 'A sleek glass dining table, ideal for modern dining spaces with a touch of elegance.'),
    ('Sofa', 'Fabric', 6000, 'Rishon LeZion', 'Central', '../assets/img/furnitureImg/Sofa.jpeg', 'A spacious and cozy fabric sofa, perfect for living rooms seeking both comfort and style.'),
    ('Coffee Table', 'Metal', 850, 'Herzliya', 'Central', '../assets/img/furnitureImg/Coffee Table.jpeg', 'A chic metal coffee table, offering a minimalist design for modern living spaces.'),
    ('Bed Frame', 'Wood', 2000, 'Netanya', 'Central', '../assets/img/furnitureImg/Bed Frame.jpeg', 'A sturdy wooden bed frame, offering durability and a timeless look to any bedroom.'),
    ('Bookshelf', 'Particle Board', 700, 'Eilat', 'South', '../assets/img/furnitureImg/Bookshelf.jpeg', 'A practical particle board bookshelf, perfect for organizing books and decor in any room.'),
    ('Recliner', 'Leather', 3200, 'Ashdod', 'South', '../assets/img/furnitureImg/Recliner.jpeg', 'A luxurious leather recliner, designed for ultimate comfort and relaxation.'),
    ('Wardrobe', 'MDF', 2700, 'Petah Tikva', 'Central', '../assets/img/furnitureImg/Wardrobe.jpeg', 'A spacious MDF wardrobe, perfect for organizing clothing and accessories with style.'),
    ('Outdoor Bench', 'Teak Wood', 1500, 'Bat Yam', 'Central', '../assets/img/furnitureImg/Outdoor Bench.jpeg', 'A durable teak wood outdoor bench, ideal for garden or patio seating.'),
    ('Bar Stool', 'Metal and Wood', 600, 'Raanana', 'Central', '../assets/img/furnitureImg/Bar Stool.jpeg', 'A stylish metal and wood bar stool, perfect for kitchen counters or bar setups.'),
    ('TV Stand', 'Glass and Metal', 1100, 'Beersheba', 'South', '../assets/img/furnitureImg/TV Stand.jpeg', 'A modern glass and metal TV stand, designed to complement contemporary living spaces.');



