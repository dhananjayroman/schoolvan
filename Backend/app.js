import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from './routes/ContactRoutes.js';
import admissionRoutes from './routes/AdmissionRoutes.js';
import authRoutes from './routes/UserRoutes.js';

// Setup
dotenv.config();
const app = express();
const PORT = 5000;

// CORS + JSON parser
app.use(cors());
app.use(express.json());

// Connect to local MongoDB named "ReactSchoolvan"

// mongoose.connect("mongodb://127.0.0.1:27017/ReactSchoolvan")
//   .then(() => console.log("MongoDB connected successfully")) // Connection success message
//   .catch((err) => console.error("MongoDB connection error:", err)); // Error message if failed




//MongoDB atlas connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: "ReactSchoolvan",
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods:['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders:['Content-Type','Authorization']
}));


// In-memory admissions (optional)
let admissions = [];

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/auth', authRoutes);

app.post('/submit-admission', (req, res) => {
  admissions.push({ id: Date.now(), ...req.body });
  res.status(200).json({ message: 'Admission submitted' });
});

app.get('/admissions', (req, res) => {
  res.json(admissions);
});

app.delete('/admissions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  admissions = admissions.filter(adm => adm.id !== id);
  res.status(200).json({ message: 'Deleted successfully' });
});


app.get("/", (req, res) => {
  res.send("🚀 Schoolvan backend is running!");
});


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, "../Frontend/dist"))); // Adjust if using Vite

// Fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html")); // Adjust as per your structure
});



// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



