import React from "react";
import AdmissionPage from "./AdmissionPage";
import '../css/Home.css';

const Home = () => {
  return (
    <>
      <section className="hero_section py-5">
        <div className="container">
          <div className="hero_row">
            {/* Text on left */}
            <div className="hero_text">
              <h3>
                Welcome to <br /> Safe & Caring School Transport
              </h3>
              <h1>School Van Service</h1>
              <p>
  Our goal is not just to transport students to school – but to ensure they travel in a completely safe, timely, and caring environment. Your child is our responsibility too – we accompany them every day with utmost care and dedication.
</p>

            </div>

            {/* Image on right */}
            <div className="hero_image">
              <img src="images/hero.png" alt="hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <AdmissionPage />
    </>
  );
};

export default Home;










