-- CreateEnum
CREATE TYPE StaffType AS ENUM ('doctor', 'nurse');

-- CreateEnum
CREATE TYPE StaffStatus AS ENUM ('available', 'out_of_office');

-- CreateTable
CREATE TABLE Staff (
    id INT NOT NULL,
    name TEXT NOT NULL,
    type StaffType NOT NULL,
    status StaffStatus NOT NULL,
    createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP(3) NOT NULL,
    CONSTRAINT Staff_pkey PRIMARY KEY (id)
);

-- CreateTable
CREATE TABLE Medicins (
    id INT NOT NULL,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL DEFAULT 0.00, -- Changed to NUMERIC for Decimal support
    quantity INTEGER NOT NULL,
    usedNumberPerDay INTEGER NOT NULL,
    createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP(3) NOT NULL,
    CONSTRAINT Medicins_pkey PRIMARY KEY (id)
);

-- Insert data into 'Staff' table
INSERT INTO Staff (id, name, type, status, createdAt, updatedAt) VALUES
    (1, 'Leila Haddad', 'doctor', 'available', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'Omar Cherkaoui', 'nurse', 'out_of_office', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'Sara Benomar', 'doctor', 'out_of_office', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'Youssef Othmani', 'nurse', 'available', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert data into 'Medicins' table
INSERT INTO Medicins (id, name, price, quantity, usedNumberPerDay, createdAt, updatedAt) VALUES
    (1, 'Paracetamol', 12.00, 150, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'Ibuprofen', 18.00, 100, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'Aspirin', 10.00, 250, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'Loratadine', 22.00, 140, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'Metronidazole', 15.00, 80, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
