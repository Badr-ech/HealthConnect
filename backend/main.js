import express from "express"
import cors from "cors"
import morgan from "morgan";
import {medicinesRouter,staffRouter} from "./Routers/index.js"
import {seedToDatabase} from "./DB/seeder.js"
const app = express();
const port = 8000;

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(morgan('dev')); 
app.use(express.json());

app.use('/medecines', medicinesRouter);
app.use('/staff', staffRouter);

app.listen(port, async() => {
  console.log(`Server running on http://localhost:${port}`);
    await seedToDatabase();
});
