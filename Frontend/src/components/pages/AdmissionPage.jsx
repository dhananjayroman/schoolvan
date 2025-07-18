import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/AdmissionPage.css';

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    
    studentClass: "",
    studentAddress: "",
    studentContact: "",
    schoolName: "",
    schoolTime: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const isValid = Object.values(formData).every((val) => val.trim() !== "");
  if (!isValid) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
   const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admissions/submit`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(formData),
   credentials: "include", // ✅ Very important!
});

    ;

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        studentName: "",
        studentClass: "",
        studentAddress: "",
        studentContact: "",
        schoolName: "",
        schoolTime: "",
      });
    } else {
      alert("Submission failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error submitting the form.");
  }
};

  return (
    <section className="admission_form_section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">School Van Admission Form</h2>
        <div className="admission_row">
          <div className="admission_image">
            <img src="images/three-student.jpg" alt="students" />
          </div>

          <div className="admission_form_wrapper">
            <form onSubmit={handleSubmit} className="form-container">

              <div className="form-group">
                <label htmlFor="studentName">Student Name</label>
                <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="studentClass">Class</label>
                <input type="text" id="studentClass" name="studentClass" value={formData.studentClass} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="studentAddress">Address</label>
                <textarea id="studentAddress" name="studentAddress" rows="3" value={formData.studentAddress} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="studentContact">Contact Number</label>
                <input type="tel" id="studentContact" name="studentContact" value={formData.studentContact} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="schoolName">School Name</label>
                <select id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleChange} required>
                  <option value="">-- Select School --</option>
                  <option value="Raja RaghunathRao Vidyalay Bhor">Raja RaghunathRao Vidhalaya Bhor</option>
                  <option value="Vidhyapratishthan Vidyalay Bhor">Jijamata English Medium School Bhor</option>
                  <option value="Jijamata Vidyalay Bhor">Vidhyapratishthan English Medium School Bhor</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="schoolTime">School Time</label>
                <input type="text" id="schoolTime" name="schoolTime" placeholder="e.g. 9:00 AM to 4:00 PM" value={formData.schoolTime} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn-primary mt-3">Submit</button>

              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionPage;



