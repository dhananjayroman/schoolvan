import express from "express";
import {
  carOwnerLogin,
  
} from "../controllers/carOwnerController.js";

const router = express.Router();

router.post("/login", carOwnerLogin);

router.get('/check-session', (req, res) => {
  if (req.session.carOwnerEmail) {
    return res.json({ ok: true });
  } else {
    return res.json({ ok: false });
  }
});


export default router;







