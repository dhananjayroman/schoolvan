import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ViewAdmissions.css";

const ViewAdmission = () => {
  const [admissions, setAdmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmissions = async () => {
      const token = localStorage.getItem("carOwnerToken");

      if (!token) {
        alert("Access denied. Only car owners can view this page.");
        return navigate("/carowner-login");
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/admissions`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Unauthorized or fetch failed");
        }

        const data = await res.json();
        setAdmissions(data);
      } catch (err) {
        console.error("Error fetching admissions:", err);
        alert("Session expired or unauthorized. Please log in again.");
        navigate("/admissions");
      }
    };

    fetchAdmissions();
  }, [navigate]);

  const deleteAdmission = async (id) => {
    const token = localStorage.getItem("carOwnerToken");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admissions/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        }
      );

      if (res.ok) {
        setAdmissions((prev) => prev.filter((a) => a._id !== id));
      } else {
        alert("Failed to delete admission.");
      }
    } catch (error) {
      console.error("Delete failed", error);
      alert("Something went wrong while deleting.");
    }
  };

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
                <tr key={adm._id}>
                  <td>{adm.studentName}</td>
                  <td>{adm.studentClass}</td>
                  <td>{adm.studentAddress}</td>
                  <td>{adm.studentContact}</td>
                  <td>{adm.schoolName}</td>
                  <td>{adm.schoolTime}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteAdmission(adm._id)}
                    >
                      Delete
                    </button>
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




