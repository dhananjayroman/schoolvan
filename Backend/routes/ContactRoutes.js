const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route    POST /api/contact
// @desc     Save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const newContact = new Contact({
      name,
      phone,
      email,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
