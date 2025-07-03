import express from "express";
import bcrypt from "bcryptjs";

const router = express.Router();

// Fixed email and password hash (hash should be pre-generated once and stored securely)
const FIXED_EMAIL = "owner@example.com";
const FIXED_PASSWORD = "owner123"; // plain password
const FIXED_PASSWORD_HASH = bcrypt.hashSync(FIXED_PASSWORD, 10); // hash it only once (sync for simplicity)

// 🔐 Car Owner Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== FIXED_EMAIL) {
    return res.status(401).json({ ok: false, error: "Email not found" });
  }

  const isMatch = await bcrypt.compare(password, FIXED_PASSWORD_HASH);
  if (!isMatch) {
    return res.status(401).json({ ok: false, error: "Incorrect password" });
  }

  req.session.carOwner = { email }; // Save session
  res.status(200).json({ ok: true, message: "Login success" });
});

// ✅ Check Car Owner Session
router.get("/session-check", (req, res) => {
  if (req.session.carOwner) {
    return res.json({ loggedIn: true, email: req.session.carOwner.email });
  } else {
    return res.json({ loggedIn: false });
  }
});

// 🔓 Logout Route
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

export default router;






