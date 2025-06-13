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
                आमचं ध्येय केवळ विद्यार्थ्यांना शाळेत पोहोचवण्याचं नाही – तर
                ते पूर्णपणे सुरक्षित, वेळेवर, आणि प्रेमळ वातावरणात प्रवास
                करावं याची खात्री देणं आहे. तुमचं बाळ आमचंही आहे – रोजच्या
                प्रवासात आम्ही जबाबदारीनं साथ देतो.
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










