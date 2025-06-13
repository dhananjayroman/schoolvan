require('dotenv').config(); // Load environment variables from .env

// ------------------------------------
// Imports
// ------------------------------------
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// ------------------------------------
// App Initialization
// ------------------------------------
const app = express();
const PORT = 5000;

// ------------------------------------
// Middleware Setup
// ------------------------------------

// Allow only your Vercel frontend to access backend
app.use(cors({
  origin: "https://gadiwalekaka.onrender.com",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));

app.use(express.json()); // Parse JSON bodies

// ------------------------------------
// MongoDB Connection
// ------------------------------------
mongoose.connect(process.env.MONGO_URI, {
  dbName: "ReactSchoolvan"
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// ------------------------------------
// In-memory storage (temporary)
// ------------------------------------
let admissions = [];

// ------------------------------------
// Routes: Temporary In-Memory APIs
// ------------------------------------
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

// ------------------------------------
// Modular Routes (MongoDB-based)
// ------------------------------------
app.use('/api/auth', require('./routes/UserRoutes'));
app.use('/api/admissions', require('./routes/AdmissionRoutes'));
app.use('/api/contact', require('./routes/ContactRoutes'));

// ------------------------------------
// Default Route
// ------------------------------------
app.get('/', (req, res) => {
  res.send('🚀 SchoolVan Backend is running!');
});

// ------------------------------------
// Serve Frontend Static Files (for deployment)
// ------------------------------------


// ------------------------------------
// Start Server
// ------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



