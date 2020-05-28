CREATE DATABASE burgers_db;

-- USE burgers_db; 

-- CREATE TABLE burgers (
-- id INT AUTO_INCREMENT,
-- burger_name VARCHAR (100),
-- devoured BOOLEAN default false,
-- PRIMARY KEY (id)
-- );

USE burgers_db; 

CREATE TABLE burgers (
id INT AUTO_INCREMENT,
burger_name VARCHAR (100),
devoured BOOLEAN default false,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Junior Bacon Cheeseburger');

UPDATE burgers SET devoured = true WHERE id = 2;
