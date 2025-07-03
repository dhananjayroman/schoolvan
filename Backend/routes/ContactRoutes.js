import express from 'express';
import Contact from '../models/Contact.js'; // ensure the file extension is added

const router = express.Router();

// Example route
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;


