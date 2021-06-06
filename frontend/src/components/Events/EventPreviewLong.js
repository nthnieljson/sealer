import React from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../../constants/eventsData";
import { dateToDatetimeFormat } from "../../util/datetime";
import locationIcon from "../../assets/location-icon.png";

const EventPreviewLong = ({ id }) => {
  const eventData = eventsData[id];
  return (
    <div>
      <div className="event-preview-lg">
        <div
          style={{
            width: "100%",
            height: "100px",
            overflow: "hidden",
            backgroundImage: `url(${eventData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        ></div>
        <div className="event-preview-lg-bottom" style={{}}>
          <Link to={`event/${eventData.id}`}>
            <p
              style={{
                color: "#898989",
                fontWeight: "600",
                margin: "0",
              }}
            >{`${eventData.beachName} Cleanup, ${eventData.beachProvinceShort}`}</p>
          </Link>

          <div
            className="d-flex align-items-center mt-2"
            style={{
              backgroundColor: "#efefef",
              width: "70%",
              padding: ".2rem 2rem .2rem 1rem",
              borderRadius: "9px",
            }}
          >
            <img src={locationIcon} style={{ width: "10px" }} alt="location" />
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
          <p
            className="mt-2"
            style={{
              fontSize: ".6rem",
              color: "#818181",
            }}
          >
            {dateToDatetimeFormat(eventData.startTime)} -{" "}
            {dateToDatetimeFormat(eventData.endTime)}
          </p>
          <div className="d-flex justify-content-between">
            <p
              style={{
                fontSize: ".9rem",
                color: "#898989",
              }}
            >
              Ends in
            </p>
            <p
              style={{
                fontSize: ".9rem",
                color: "#6dbcc3",
              }}
            >{`${eventData.timeLeft}`}</p>
          </div>
        </div>
      </div>
      <style>
        {`
            .event-preview-lg{                
                border-radius: 10px;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
            }

            .event-preview-lg-bottom {
                padding: .75rem;
            }
          `}
      </style>
    </div>
  );
};

export default EventPreviewLong;
