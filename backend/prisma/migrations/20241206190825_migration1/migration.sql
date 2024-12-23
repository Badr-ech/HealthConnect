/*
  Warnings:

  - You are about to drop the `medicins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `staff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropEnum
DROP TYPE "staffstatus";

-- DropEnum
DROP TYPE "stafftype";

-- CreateEnum
CREATE TYPE "StaffType" AS ENUM ('doctor', 'nurse');

-- CreateEnum
CREATE TYPE "StaffStatus" AS ENUM ('available', 'out_of_office');

-- DropTable
DROP TABLE "medicins";

-- DropTable
DROP TABLE "staff";



-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "StaffType" NOT NULL,
    "status" "StaffStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicins" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "quantity" INTEGER NOT NULL,
    "usedNumberPerDay" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medicins_pkey" PRIMARY KEY ("id")
);
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,              -- Unique ID for each appointment
    staff_id INT REFERENCES staff(id),  -- Link to a staff member (optional)
    patient_name VARCHAR(100),          -- Name of the patient
    patient_contact VARCHAR(15),        -- Contact details of the patient
    date DATE NOT NULL,                 -- Appointment date
    time VARCHAR(10) NOT NULL,          -- Appointment time
    reason TEXT NOT NULL,               -- Reason for the appointment
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Time of booking
);
