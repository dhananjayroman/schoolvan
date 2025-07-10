import bcrypt from "bcryptjs";

// Static credentials (normally stored securely, e.g., in DB or env)
const FIXED_EMAIL = "owner@gmail.com";
const FIXED_PASSWORD = "owner123";
const FIXED_PASSWORD_HASH = bcrypt.hashSync(FIXED_PASSWORD, 10);

// 🔐 Handle Car Owner Login
export const carOwnerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email !== FIXED_EMAIL) {
    return res.status(401).json({ ok: false, error: "Email not found" });
  }

  const isMatch = await bcrypt.compare(password, FIXED_PASSWORD_HASH);
  if (!isMatch) {
    return res.status(401).json({ ok: false, error: "Incorrect password" });
  }

  req.session.carOwner = { email };
  return res.status(200).json({ ok: true, message: "Login success" });
};

// ✅ Check Car Owner Session
export const checkCarOwnerSession = (req, res) => {
  if (req.session.carOwner) {
    return res.json({ loggedIn: true, email: req.session.carOwner.email });
  } else {
    return res.json({ loggedIn: false });
  }
};

// 🔓 Handle Logout
export const carOwnerLogout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
};
