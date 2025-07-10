import express from "express";
import {
  carOwnerLogin,
  checkCarOwnerSession,
  carOwnerLogout,
} from "../controllers/carOwnerController.js";

const router = express.Router();

router.post("/login", carOwnerLogin);
router.get("/session-check", checkCarOwnerSession);
router.post("/logout", carOwnerLogout);

export default router;







