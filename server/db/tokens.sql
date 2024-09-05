USE imy2;
DROP TABLE IF EXISTS tokens;

CREATE TABLE tokens (
 id INT NULL PRIMARY KEY AUTO_INCREMENT,
 user_id INT NOT NULL,
 token_type VARCHAR(70) not null, -- refresh or restore password 
 token VARCHAR(1000) not null, 
 expired_at DATETIME NOT NULL
);


