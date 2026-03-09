import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Hello From Product Inventory Management System");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
