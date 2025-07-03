import express from "express";
import bcrypt from "bcrypt";
import UserRegister from "../models/UserRegister.js"; // Make sure .js is included

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserRegister.findOne({ email });

    if (!user) {
      return res.status(401).json({ ok: false, error: "Email and Password not has register Plz register first" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ ok: false, error: "Incorrect password" });
    }

    // ✅ SET SESSION
    req.session.studentEmail = email;

    res.status(200).json({ ok: true, message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});


export default router;









