
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import routerUser from "./routes/userRoutes.js";
import routerTasks from "./routes/tasksRoutes.js";
import connectDB from "./config/db.js";

dotenv.config({ path: '.env' });
const app = express();

// Habilitar CORS para todas las rutas
console.log(process.env.FRONTEND_URL)
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:8080",
  credentials: true
}));


app.options("*", cors());  // Maneja preflight requests



app.use(cookieParser());
app.use(express.json());

connectDB();

app.use(routerUser);
app.use("/task", routerTasks);

app.listen(process.env.PORT ?? 5000, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT || 5000}`))