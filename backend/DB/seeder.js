import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedToDatabase = async ()=> {
    await prisma.staff.deleteMany({});
    await prisma.medicins.deleteMany({});

    const staffMembers = [
        { name: "Ahmed Aaloui", type: "doctor", status: "available" },
        { name: "Nabila BenAli", type: "nurse", status: "out_of_office" },
        { name: "Mariame Elghenmy", type: "doctor", status: "out_of_office" },
        { name: "Zakaria moharim", type: "nurse", status: "available" },

    ];

    const medicins = [
        { name: "Paracetamol", price: 10, quantity: 100, usedNumberPerDay: 2 },
        { name: "Ibuprofen", price: 15, quantity: 150, usedNumberPerDay: 3 },
        { name: "Aspirin", price: 8, quantity: 200, usedNumberPerDay: 1 },
        { name: "Cetirizine", price: 20, quantity: 120, usedNumberPerDay: 1 },
        { name: "Amoxicillin", price: 12, quantity: 90, usedNumberPerDay: 3 }
    ];
    

    console.log(`Seeding staff data...`);
    await prisma.staff.createMany({
        data: staffMembers,
    });

    console.log(`Seeding medicins data...`);
    await prisma.medicins.createMany({
        data: medicins,
    });

    console.log("Database seeding completed!");
}
