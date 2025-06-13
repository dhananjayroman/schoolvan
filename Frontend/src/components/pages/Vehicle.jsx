import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Vehicle = () => {
  return (
    <section className="vehicle_section" style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <div className="container">
        <h2 className="main-heading text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
          Our Vehicles Facility
        </h2>
        <p className="text-center" style={{ fontSize: "1.1rem", color: "#555", marginBottom: "40px" }}>
          We take pride in offering a comfortable and safe ride for your children. Our fleet of well-maintained vehicles ensures timely and reliable transportation to and from school, every day.
        </p>

        <div className="layout_padding-top">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="5000">
            <div className="carousel-inner">
              {/* Vehicle 1 */}
              <div className="carousel-item active">
                <div className="vehicle_img-box">
                  <img src="/images/bus-1.jpeg" alt="School Bus" className="img-fluid w-100" style={{ borderRadius: "10px" }} />
                </div>
              </div>

              {/* Vehicle 2 */}
              <div className="carousel-item">
                <div className="vehicle_img-box">
                  <img src="/images/bus-2.jpeg" alt="School Van" className="img-fluid w-100" style={{ borderRadius: "10px" }} />
                </div>
              </div>

              {/* Vehicle 3 */}
              <div className="carousel-item">
                <div className="vehicle_img-box">
                  <img src="/images/bus-3.jpeg" alt="Mini Bus" className="img-fluid w-100" style={{ borderRadius: "10px" }} />
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "#000", borderRadius: "50%" }}></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "#000", borderRadius: "50%" }}></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
