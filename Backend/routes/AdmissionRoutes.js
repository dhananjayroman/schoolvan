const express = require('express');
const router = express.Router();
const UserAdmission = require('../models/UserAdmission');

// ✅ POST - Save admission to MongoDB
router.post('/submit', async (req, res) => {
  try {
    const { studentName, studentClass, studentAddress, studentContact, schoolName, schoolTime } = req.body;

    // Basic validation
    if (!studentName || !studentClass || !studentAddress || !studentContact || !schoolName || !schoolTime) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newAdmission = new UserAdmission(req.body);
    await newAdmission.save();

    res.status(200).json({ message: 'Admission submitted successfully' });
  } catch (error) {
    console.error('Error saving admission:', error);
    res.status(500).json({ error: 'Failed to save admission' });
  }
});

// ✅ GET - Fetch all admissions
router.get('/', async (req, res) => {
  try {
    const admissions = await UserAdmission.find().sort({ createdAt: -1 }); // latest first
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch admissions' });
  }
});

// ✅ DELETE - Delete admission by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await UserAdmission.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    res.status(200).json({ message: 'Admission deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete admission' });
  }
});

module.exports = router;

