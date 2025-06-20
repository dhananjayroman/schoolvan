const express = require("express");
const router = express.Router();
const Userlogin = require("../models/Userlogin");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new Userlogin({ email, password });
    await newUser.save();
    res.status(200).json({ ok: true, message: "Login data saved successfully" });
  } catch (err) {
    console.error("Login save error:", err);
    res.status(500).json({ ok: false, error: "Failed to save login data" });
  }
});

module.exports = router;




