// models/Userlogin.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Userlogin=mongoose.model("userLogin",userSchema)

export default Userlogin;