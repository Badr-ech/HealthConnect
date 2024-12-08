import express from "express";
import cors from "cors";
import morgan from "morgan";

import { medicinesRouter, staffRouter, appointmentsRouter } from "./Routers/index.js"; // Import the new router
import { seedToDatabase } from "./DB/seeder.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 8000;

// Middleware configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

// API routes
app.use("/Medecines", medicinesRouter);
app.use("/StaffRouter", staffRouter);
app.use("/Appointments", appointmentsRouter); // Added appointments router

// Start server
app.listen(port, async () => {
  console.log('Server running on http://localhost:${port}');
  await seedToDatabase();
});


