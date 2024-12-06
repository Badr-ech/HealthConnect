import express from "express"
import cors from "cors"
import morgan from "morgan";
import {medicinesRouter,staffRouter} from "./Routers/index.js"
import {seedToDatabase} from "./DB/seeder.js"
const app = express();
const port = 8000;

app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true
}));


app.use(morgan('dev')); 
app.use(express.json());

app.use('/Medecines', medicinesRouter);
app.use('/StaffRouter', staffRouter);

app.listen(port, async() => {
  console.log(`Server running on http://localhost:${port}`);
    await seedToDatabase();
});

