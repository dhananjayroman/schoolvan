import Admission from "../models/Admission.js";

// POST: Submit Admission (Student must be logged in)
export const submitAdmission = async (req, res) => {
  if (!req.session.studentEmail) {
    return res.status(401).json({ ok: false, error: "Login required" });
  }

  const { studentName, studentClass, studentAddress, studentContact, schoolName, schoolTime } = req.body;

  try {
    const newAdmission = new Admission({
      studentName,
      studentClass,
      studentAddress,
      studentContact,
      schoolName,
      schoolTime,
    });

    await newAdmission.save();
    res.status(200).json({ ok: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Submit error:", error);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};

// GET: All admissions (Car owner only)
export const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE: Admission by ID (Car owner only)
export const deleteAdmission = async (req, res) => {
  try {
    const deleted = await Admission.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
