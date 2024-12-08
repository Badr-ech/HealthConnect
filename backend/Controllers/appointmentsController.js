import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createAppointment = async (req, res) => {
  const { staffId, patientName, patientContact, date, time, reason } = req.body;

  if (!patientName || !patientContact || !date || !time || !reason) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newAppointment = await prisma.appointment.create({
      data: {
        staffId,
        patientName,
        patientContact,
        date: new Date(date),
        time,
        reason,
      },
    });
    res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      include: { staff: true },
      orderBy: { date: "asc" },
    });
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAppointmentsByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const appointments = await prisma.appointment.findMany({
      where: { date: new Date(date) },
      include: { staff: true },
      orderBy: { time: "asc" },
    });
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments by date:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
