USE imy2;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
 id INT NULL PRIMARY KEY AUTO_INCREMENT,
 email VARCHAR(150) NOT NULL,
 name VARCHAR(70) not null, 
 phone_number VARCHAR(20) not null, 
 password VARCHAR(50) NOT NULL,
 image VARCHAR(250) NULL

);

INSERT INTO users (email, name, phone_number, password, image) VALUES
('mark@gmail.com', 'mark', '0546080824', '12345', null);
