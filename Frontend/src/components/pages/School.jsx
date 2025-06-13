import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/School.css"

import school1 from "../../assets/school-1.jpg";
import school2 from "../../assets/school-2.jpg";
import school3 from "../../assets/school-3.jpg";

const schoolsData = [
  {
    title: "Raja RaghunathRao Vidhalaya Bhor",
    description: "Academic excellence and holistic growth.",
    pickup: "7:30 AM",
    drop: "1:00 PM",
    image: school1,
  },
  {
    title: "Jijamata English Medium School Bhor",
    description: "Creativity and discipline in a green campus.",
    pickup: "7:30 AM",
    drop: "1:00 PM",
    image: school2,
  },
  {
    title: "Vidhyapratishthan English Medium School Bhor",
    description: "Value-based education from one of the oldest schools.",
    pickup: "10:00 AM",
    drop: "5:00 PM",
    image: school3,
  },
];

const School = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleMoreInfo = (school) => {
    setSelectedSchool(school);
    setTimeout(() => {
      const element = document.getElementById("schoolDetails");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Schools</h2>
        <div className="row">
          {schoolsData.map((school, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={school.image}
                  className="card-img-top"
                  alt={school.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{school.title}</h5>
                  <p className="card-text">{school.description}</p>
                  <p>
                    <strong>Pickup:</strong> {school.pickup}
                    <br />
                    <strong>Drop:</strong> {school.drop}
                  </p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleMoreInfo(school)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSchool && (
        <div id="schoolDetails" className="container my-5">
          <div className="card shadow p-4">
            <h3 className="text-primary mb-3 text-center">{selectedSchool.title}</h3>
           
            <p className="text-center">
              <strong>Pickup:</strong> {selectedSchool.pickup} &nbsp;&nbsp;
              <strong>Drop:</strong> {selectedSchool.drop}
            </p>
            <p className="text-center fw-bold">
              Monthly Charges per Student: ₹700
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default School;


