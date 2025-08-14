-- Create Database
CREATE DATABASE basketball_shoes_recommendations;

-- Use the database
USE basketball_shoes_recommendations;

-- Create Table
CREATE TABLE shoes_recommendations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shoe_name VARCHAR(100) NOT NULL,
    sizing VARCHAR(50),
    arch_support VARCHAR(50),
    ankle_support VARCHAR(50),
    `narrow_or_wide` VARCHAR(50),
    injury_prevention VARCHAR(50),
    traction VARCHAR(50),
    comfort VARCHAR(50),
    durability VARCHAR(50),
    price DECIMAL(10,2),
    recommended ENUM('Yes', 'No')
);

-- Insert Data
INSERT INTO shoes_recommendations (
    shoe_name, sizing, arch_support, ankle_support, 
    `narrow_or_wide`, injury_prevention, traction, 
    comfort, durability, price, recommended
) VALUES 
('Nike G.T. Cut 3', 'True to size', 'Moderate', 'Low', 'Narrow', 'Moderate', 'High', 'Moderate', 'High', 245.00, 'Yes'),
('Giannis Freak 6', 'Runs slightly small', 'High', 'Moderate', 'Medium', 'High', 'Very high', 'High', 'Very high', 180.00, 'Yes'),
('LeBron XXII ''Crown Jewel''', 'True to size', 'High', 'High', 'Wide', 'High', 'High', 'Very high', 'High', 260.00, 'Yes'),
('Air Jordan XXXIX ''Lumière''', 'True to size', 'Moderate', 'Moderate', 'Narrow', 'Moderate', 'High', 'High', 'Moderate', 260.00, 'Yes'),
('LeBron Witness 8', 'True to size', 'Moderate', 'Moderate', 'Medium', 'Low', 'High', 'Moderate', 'High', 145.00, 'No'),
('Nike Kyrie Infinity', 'True to size', 'High', 'Moderate', 'Narrow', 'High', 'Very high', 'High', 'High', 160.00, 'Yes'),
('Nike PG 6', 'Runs slightly small', 'Moderate', 'Moderate', 'Medium', 'High', 'High', 'Moderate', 'High', 120.00, 'Yes'),
('Curry One ''Underdog''', 'True to size', 'High', 'Moderate', 'Narrow', 'High', 'High', 'High', 'High', 130.00, 'Yes'),
('Curry Flow 10', 'Runs slightly small', 'High', 'Moderate', 'Narrow', 'Very high', 'High', 'Very high', 'High', 160.00, 'Yes'),
('UA HOVR Havoc 4', 'True to size', 'Moderate', 'High', 'Medium', 'High', 'Moderate', 'High', 'High', 140.00, 'Yes'),
('Under Armour Spawn 4', 'True to size', 'Moderate', 'Moderate', 'Wide', 'High', 'High', 'Moderate', 'High', 120.00, 'No'),
('Under Armour Curry 9', 'True to size', 'High', 'High', 'Narrow', 'Very high', 'High', 'Very high', 'High', 200.00, 'Yes'),
('Under Armour Lockdown 6', 'True to size', 'Moderate', 'Low', 'Wide', 'Moderate', 'Moderate', 'High', 'Moderate', 70.00, 'No'),
('Under Armour Jet ''21', 'True to size', 'Moderate', 'Moderate', 'Medium', 'High', 'High', 'High', 'High', 110.00, 'Yes'),
('Adidas Dame 8', 'True to size', 'Moderate', 'Moderate', 'Medium', 'High', 'Moderate', 'High', 'High', 140.00, 'Yes'),
('Adidas Trae Young 2', 'True to size', 'Moderate', 'High', 'Medium', 'Very high', 'High', 'High', 'High', 160.00, 'Yes'),
('Adidas Harden Vol. 7', 'Runs slightly big', 'High', 'Moderate', 'Wide', 'High', 'Very high', 'High', 'High', 180.00, 'Yes'),
('Adidas Pro Boost', 'True to size', 'Moderate', 'Moderate', 'Medium', 'High', 'Moderate', 'Moderate', 'Moderate', 120.00, 'No'),
('Adidas Crazy BYW X', 'True to size', 'High', 'Moderate', 'Wide', 'High', 'Very high', 'Very high', 'High', 190.00, 'Yes'),
('Adidas Donovan Mitchell D.O.N. Issue 4', 'True to size', 'Moderate', 'High', 'Medium', 'High', 'Very high', 'High', 'Moderate', 130.00, 'Yes'),
('Adidas Exhibit A', 'Runs slightly big', 'Moderate', 'Low', 'Narrow', 'Moderate', 'High', 'Moderate', 'High', 100.00, 'No');

-- Optional: Add some useful indexes
CREATE INDEX idx_shoe_name ON shoes_recommendations(shoe_name);
CREATE INDEX idx_recommended ON shoes_recommendations(recommended);
CREATE INDEX idx_price ON shoes_recommendations(price);