import React from 'react';
import '../css/About.css'; // Make sure the path matches your file structure
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <h2 className="main-heading">About Our School Van Service</h2>
        <p className="text-center">
          Our school van service is dedicated to ensuring your child’s daily journey is safe,
          comfortable, and on time. With trusted drivers, well-maintained vehicles, and a focus
          on child-friendly care, we provide reliable transportation you can count on every day.
        </p>
        <div className="about_img-box">
          <img src="/images/student-img.jpg" alt="School van with happy kids" className="img-fluid w-100" />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/rules" className="call_to-btn">
  <span>Read More Rules for Students</span>
  <img src="/images/right-arrow.png" alt="Right Arrow" />
</Link>

        </div>
      </div>
    </section>
  );
};

export default About;

