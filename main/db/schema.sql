DROP DATABASE IF EXISTS employeelist_db;
CREATE DATABASE employeelist_dblist_db;

USE employeelist_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  jobtitle INT,
  manager_id INT
);

CREATE TABLE department (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      department VARCHAR(30) NOT NULL
);

CREATE TABLE role (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      jobtitle VARCHAR(30) NOT NULL,
      salary DECIMAL,
      department INT
);