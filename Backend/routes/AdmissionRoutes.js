import express from "express";
import {
  submitAdmission,
  getAllAdmissions,
  deleteAdmission,
} from "../controllers/admissionController.js";

const router = express.Router();

// Middleware: Only allow if car owner is logged in
const requireCarOwner = (req, res, next) => {
  if (!req.session.carOwner) {
    return res.status(401).json({ error: "Access denied" });
  }
  next();
};

// Submit admission (student login required)
router.post("/submit", submitAdmission);

// Get all admissions (car owner only)
router.get("/", requireCarOwner, getAllAdmissions);

// Delete admission by ID (car owner only)
router.delete("/:id", requireCarOwner, deleteAdmission);

export default router;






