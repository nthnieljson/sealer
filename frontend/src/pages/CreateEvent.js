import React from "react";
import uploadIcon from "../assets/upload-icon.png";

const CreateEvent = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(assets/create-event-bg.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div style={{ width: "60%" }}>
            <div>
              <h3 className="new-event-h3 m-0 p-0 mt-5">Create my event</h3>
              <h4 className="new-event-h4 m-0 p-0 mt-2 mb-3">
                Customize the fields below
              </h4>
            </div>

            <h4 className="new-desc mt-5">Event Image</h4>
            <div
              className="d-flex flex-column justify-content-center align-items-center new-input"
              style={{
                padding: "2rem 5rem",
              }}
            >
              <img src={uploadIcon} alt="upload" />
              <p className="new-desc">Media Upload</p>
            </div>
            <input
              className="new-input mt-4"
              placeholder="Event name"
              style={{ padding: ".5rem 1rem" }}
            />
            <textarea
              className="new-input mt-4"
              placeholder="Event description"
              style={{ padding: ".5rem 1rem" }}
              cols="75"
              rows="6"
            />
            <input
              className="new-input mt-4"
              placeholder="Organizer"
              style={{ padding: ".5rem 1rem" }}
            />
            <div className="row mt-4">
              <div className="col-6">
                <p className="new-desc h-0 p-0">Start Date</p>
                <input
                  type="date"
                  className="m-0 new-input"
                  style={{ padding: ".5rem" }}
                />
              </div>
              <div className="col-6">
                <p className="new-desc h-0 p-0">End Date</p>
                <input
                  type="date"
                  className="m-0 new-input"
                  style={{ padding: ".5rem" }}
                />
              </div>
            </div>
            <input
              className="new-input mt-4"
              placeholder="Waste target (kg)"
              style={{ padding: ".5rem 1rem" }}
            />
            <input
              className="new-input mt-4"
              placeholder="Location"
              style={{ padding: ".5rem 1rem" }}
            />
            <button
              className="create-btn mt-5"
              style={{
                padding: ".25rem 2.25rem",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#6bdcc4",
                fontSize: ".75rem",
                color: "#ffffff",
                fontWeight: "600",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
             .new-event-h3 {
                font-size: 1.75rem;
                font-weight: 600;                
            }

            .new-event-h4 {
                font-size: 1rem;
            }

            .new-desc {
                font-size: 1rem;
                color: #a7a7a7;
                font-weight: 600;
            }

            .new-input {
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                outline: none;
                border: none;
                width: 100%;
            }

            input:focus {
                outline: none;
            }

            .create-btn:focus {
                outline: none
            }
          `}
      </style>
    </div>
  );
};

export default CreateEvent;
