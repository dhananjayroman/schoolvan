import bcrypt from "bcrypt";
import UserRegister from "../models/UserRegister.js";
import Userlogin from "../models/Userlogin.js";


// Controller function for student login
export const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserRegister.findOne({ email });

    if (!user) {
      return res.status(401).json({
        ok: false,
        error: "Email and Password not registered. Please register first.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ ok: false, error: "Incorrect password" });
    }

    const hashedPassword = await bcrypt.hash(user.password,10);
     const newUser = new Userlogin({
      
      email,
      password: hashedPassword,
    });

    await newUser.save();
   

    // ✅ Set session
    req.session.studentEmail = email;

    res.status(200).json({ ok: true, message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};
