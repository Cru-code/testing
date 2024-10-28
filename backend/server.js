import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // alows json data in the req.body

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
