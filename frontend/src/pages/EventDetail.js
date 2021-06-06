import React, { useState } from "react";
import { useParams } from "react-router";
import { eventsData } from "../constants/eventsData";
import backArrowIcon from "../assets/arrow-back.png";
import { Link } from "react-router-dom";
import mapImg from "../assets/map-1.png";
import locationIcon from "../assets/location-icon.png";
import userReview from "../assets/review-user.png";
import { dateToDatetimeFormat } from "../util/datetime";

const EventDetail = () => {
  var { id } = useParams();
  id = parseInt(id);
  const eventData = eventsData[id];

  const [joined, setJoined] = useState(false);
  const [reviews, setReviews] = useState([
    "It was an absolute blast, I went there with my family, the cleanup organizers were very nice, they were all welcoming and guided us on what to do. Overall a very engaging experience, would recommend to anyone looking for a fun pastime.",
  ]);

  const [review, setReview] = useState("");

  const handleSubmitReview = () => {
    if (review !== "") {
      setReviews([...reviews, review]);
      setReview("");
    }
  };

  return (
    <div>
      <div>
        <div
          className="mt-5"
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={eventData.image}
            style={{ width: "100%", marginTop: "-30%" }}
            alt="beach"
          />
        </div>
        <div className="container mt-5">
          <Link to="/events">
            <div className="d-flex align-items-center">
              <img src={backArrowIcon} alt="back-icon" />
              <div>
                <p
                  className="m-0 p-0"
                  style={{
                    color: "#363636",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Back to
                </p>
                <p
                  className="m-0 p-0"
                  style={{
                    color: "#808080",
                    fontSize: ".9rem",
                    fontWeight: "600",
                  }}
                >
                  Search Results
                </p>
              </div>
            </div>
          </Link>

          <div className="d-flex justify-content-between mt-5">
            <div className="" style={{ width: "55%" }}>
              <p
                className="m-0 p-0"
                style={{
                  fontWeight: "600",
                  color: "#363636",
                  fontSize: "2rem",
                }}
              >{`${eventData.beachName} Cleanup`}</p>
              <p
                className="m-0 p-0"
                style={{
                  fontWeight: "600",
                  color: "#808080",
                  fontSize: "1.5rem",
                }}
              >
                {eventData.beachProvinceLong}
              </p>
              <div className="d-flex justify-content-between mt-4">
                <div>
                  <p
                    className="p-0 m-0"
                    style={{
                      color: "#818181",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Organized by
                  </p>
                  <p
                    className="p-0 m-0"
                    style={{
                      color: "#818181",
                      fontSize: "1rem",
                      fontWeight: "400",
                    }}
                  >
                    {eventData.organizerName}
                  </p>
                  <div
                    className="d-flex align-items-center mt-3"
                    style={{
                      backgroundColor: "#efefef",
                      width: "100%",
                      padding: ".2rem 2rem .2rem 1rem",
                      borderRadius: "9px",
                    }}
                  >
                    <img
                      src={locationIcon}
                      style={{ width: "10px" }}
                      alt="location"
                    />
                    <p
                      className="ml-2"
                      style={{
                        padding: 0,
                        margin: 0,
                        color: "#818181",
                        fontSize: ".75rem",
                      }}
                    >
                      Exact Location
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-end">
                  <button
                    disabled={joined}
                    className="contribute-btn"
                    onClick={() => setJoined(true)}
                    style={{
                      padding: ".5rem 2rem",
                      border: "none",
                      borderRadius: "12.5px",
                      backgroundColor: joined ? "#506A6C" : "#6bdcc3",
                      fontSize: "1rem",
                      color: "#ffffff",
                    }}
                  >
                    {joined ? "Joined" : "Contribute"}
                  </button>
                </div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ marginTop: "6rem" }}
              >
                <div>
                  <p className="m-0 p-0 event-dtl-text-h3">Start</p>
                  <p className="m-0 p-0 event-dtl-text-h4">
                    {dateToDatetimeFormat(eventData.startTime)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="m-0 p-0 event-dtl-text-h3">End</p>
                  <p className="m-0 p-0 event-dtl-text-h4">
                    {dateToDatetimeFormat(eventData.endTime)}
                  </p>
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ marginTop: "1rem" }}
              >
                <div>
                  <p className="m-0 p-0 event-dtl-text-h3">Start</p>
                  <p className="m-0 p-0 event-dtl-text-h4">
                    {dateToDatetimeFormat(eventData.startTime)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="m-0 p-0 event-dtl-text-h3">End</p>
                  <p className="m-0 p-0 event-dtl-text-h4">
                    {dateToDatetimeFormat(eventData.endTime)}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img src={mapImg} alt="map" />
            </div>
          </div>
          <h2
            className=""
            style={{
              marginTop: "4rem",
              fontWeight: "600",
              fontSize: "1.6rem",
            }}
          >
            Volunteer's Words
          </h2>
          {joined ? (
            <div className="d-flex flex-column " style={{ width: "70%" }}>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="review-input p-3 mt-4"
                placeholder="Write your testimonial"
                cols="75"
                rows="4"
                style={{
                  outline: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
              />
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="contribute-btn"
                  style={{
                    padding: ".25rem 1.5rem",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#6bdcc4",
                    fontSize: ".75rem",
                    color: "#ffffff",
                    fontWeight: "600",
                  }}
                  onClick={() => handleSubmitReview()}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {reviews.map((review, idx) => {
            return (
              <div className="d-flex mt-5" key={idx}>
                <div
                  className="d-flex align-items-start"
                  style={{
                    width: "15%",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img src={userReview} alt="prof-pic" />
                    <div className="ml-4">
                      <p
                        className="m-0 p-0"
                        style={{
                          fontSize: ".9rem",
                          color: "#818181",
                          fontWeight: "600",
                        }}
                      >
                        Geoff
                      </p>
                      <p
                        className="m-0 p-0"
                        style={{
                          fontSize: ".8rem",
                          color: "#818181",
                          fontWeight: "400",
                        }}
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "55%",
                  }}
                >
                  <p
                    className="text-justify"
                    style={{
                      fontSize: "1rem",
                      color: "#363636",
                      fontWeight: "400",
                      width: "100%",
                    }}
                  >
                    {review}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`
          .contribute-btn:focus {
              outline: none
          }

          .event-dtl-text-h3 {
            font-size: 1rem;
            font-weight: 600;
            color: #818181;
          }

          .event-dtl-text-h4 {
            font-size: 1rem;
            font-weight: 400;
            color: #6dbcc3;
          }

          .review-input {
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5)
          }
          `}
      </style>
    </div>
  );
};

export default EventDetail;
