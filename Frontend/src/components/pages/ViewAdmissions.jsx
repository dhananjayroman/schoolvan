import React, { useEffect, useState } from "react";
import "../css/ViewAdmissions.css"; // Optional: for custom styles

const ViewAdmission = () => {
  const [admissions, setAdmissions] = useState([]);

  const fetchAdmissions = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/admissions"); // ensure this matches backend
    const data = await response.json();
    console.log("Fetched admissions:", data); // Debug
    setAdmissions(data); // or data.admissions, depending on your backend
  } catch (err) {
    console.error("Error fetching admissions:", err);
  }
};


  const deleteAdmission = async (id) => {
    try {
      const res = await fetch(`https://gadiwalekaka-backend-1.onrender.com/api/admissions/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
       setAdmissions((prev) => prev.filter((a) => a._id !== id));

      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">Student Admissions</h2>

      {admissions.length === 0 ? (
        <p className="text-center">No admissions yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                
                <th>Class</th>
                <th>Address</th>
                <th>Contact</th>
                <th>School</th>
                <th>Time</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((adm) => (
                <tr key={adm.id}>
                  <td>{adm.studentName}</td>
                  
                  <td>{adm.studentClass}</td>
                  <td>{adm.studentAddress}</td>
                  <td>{adm.studentContact}</td>
                  <td>{adm.schoolName}</td>
                  <td>{adm.schoolTime}</td>
                  
                  <td>
                     <button className="btn btn-danger btn-sm"onClick={() => deleteAdmission(adm._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewAdmission;

