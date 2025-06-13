// routes/UserRoutes.js
const express = require("express");
const router = express.Router();
const Userlogin = require("../models/Userlogin");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new Userlogin({ email, password });
    await newUser.save();
    res.status(200).json({ message: "Login data saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save login data" });
  }
});

module.exports = router;




