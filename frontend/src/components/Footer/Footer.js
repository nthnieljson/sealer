import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="d-flex justify-content-center footer-top">
          <hr className="white-line" />
          <img src="assets/sealer-logo.png" alt="sealer-logo-footer" />
          <hr className="white-line" />
        </div>
        <div className="d-flex justify-content-around align-items-center mt-5 text-center footer-mid">
          <div className="footer-mid-el">
            <h5 className="footer-mid-title">Pages</h5>
            <div className="footer-mid-link">
              <p>Home</p>
              <p>Events</p>
              <p>Profile</p>
              <p>Logout</p>
            </div>
          </div>
          <div className="footer-desc">
            <p>
              <b>Sealer</b> is a long-term, sustainable, non-profit initiative
              that aims to help prevent waste from going back to our oceans
            </p>
            <p>
              This project was iniated by three undergraduates from{" "}
              <b>Indonesia</b>, a maritime country with over 17.000 islands
              surrounded by the sea.
            </p>
          </div>
          <div className="footer-mid-el">
            <h5 className="footer-mid-title">More</h5>
            <div className="footer-mid-link">
              <p>About Us</p>
              <p>Contacts</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .footer {
                background-color: #363636;
                padding: 2rem 4rem;
            }

            .white-line {
                border: 1px solid #ffffff;
                width: 100%;
            }

            .footer-mid {
                color: #ffffff;
            }

            .footer-mid-el {
                width: 30%;

            }

            .footer-desc {
                width: 30%;
                font-size: 1rem;
            }

            .footer-mid-title {
                font-size: 1rem;
                font-weight: 700;
            }

            .footer-mid-el p {
                padding: 0;
                margin: .2rem 0;
                text-decoration: underline;                
            }
          `}
      </style>
    </div>
  );
};

export default Footer;
