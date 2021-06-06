import React from "react";
import { Link } from "react-router-dom";
import heroTopBg from "../../assets/home-hero-top-bg.png";

const HomeHero = () => {
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${heroTopBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center hero-top text-center">
          <h1 className="hero-title">
            Help us prevent waste from going back to our oceans.
          </h1>
          <h4 className="mt-4 hero-desc">
            Organize clean-up events at a local beach or shoreline
          </h4>
          <div className="d-flex justify-content-center new-event-container">
            <Link className="new-event-link" to="/create-event">
              <div className="d-flex justify-content-center align-items-center new-event mt-5">
                Create your own event
                <img
                  className="ml-4"
                  src="assets/new-black.png"
                  alt="new-black-btn"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <img src="assets/earth-home.png" alt="earth-home" />
        </div>
      </div>
      <style>
        {`
            .hero-top {
                width: 55%;
            }
            .hero-title {
                font-weight: 600;
                font-size: 3.3rem;
            }

            .hero-desc {
                font-weight: 500;
                font-size: 1rem;
            }

            .new-event-link, .new-event-link:hover {
                text-decoration: none;
                color: #ffffff;                
                
            }

            .new-event-container {
                width: 60%;
            }

            .new-event {
                background-color: #363636;
                font-size: 1rem;
                font-weight: 700;
                padding: .75rem 3rem;
                border-radius: .25rem;

            }

            .hero-bottom {
                margin-top: 5rem;
            }
          `}
      </style>
    </div>
  );
};

export default HomeHero;
