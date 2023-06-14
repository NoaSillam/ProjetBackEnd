DROP DATABASE IF EXISTS tes;
CREATE DATABASE IF NOT EXISTS test;
USE test;

DROP TABLE IF EXISTS clients;

CREATE TABLE IF NOT EXISTS clients
(
    id  INT PRIMARY KEY auto_increment,
    username VARCHAR(25) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role EMUN('Admin', 'SuperUser') DEFAULT 'SuperUser',
    age INT(11) DEFAULT 0
);