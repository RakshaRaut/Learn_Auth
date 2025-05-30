import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

const app = express(); 
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)

app.listen(PORT, async () => {
  await connectDB();
  console.log(" Server running on port:", PORT);
});
