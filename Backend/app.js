// app.js (ES Module version)

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import contactRoutes from './routes/ContactRoutes.js';
import admissionRoutes from './routes/AdmissionRoutes.js';
import authRoutes from './routes/UserRoutes.js';
import registerRoutes from './routes/RegistrationRoutes.js';
import carOwnerRoutes from './routes/CarOwnerRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



import session from "express-session";
import cookieParser from "cookie-parser";

// Enable JSON and cookies
app.use(express.json());
app.use(cookieParser());






// Configure express-session
// ✅ Session config
app.use(session({
  secret: 'some-secure-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // ✅ Use true if using HTTPS (Vercel/Render)
    httpOnly: false,
    sameSite: 'none'     // ✅ Important for cross-site cookies
  }
}));


// Middleware

const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://gadiwalekaka-com.onrender.com", // deployed frontend (adjust accordingly)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



app.use(express.json());

//MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/ReactSchoolvan")
//   .then(() => console.log("✅ MongoDB connected successfully"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));


  // MongoDB Connection using Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Atlas connection error:", err));



// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/register', registerRoutes);

app.use("/api/carowner", carOwnerRoutes);



// Root route
app.get("/", (req, res) => {
  res.send("🚗 School Van Booking API is running!");
});






// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
