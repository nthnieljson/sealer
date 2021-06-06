import React from "react";
import { useParams } from "react-router";
import { eventsData } from "../constants/eventsData";

const EventDetail = () => {
  var { id } = useParams();
  id = parseInt(id);
  const eventData = eventsData[id];
  return (
    <div>
      <div>
        <div
          style={{
            width: "100%",
            height: "100px",
            overflow: "hidden",
            backgroundImage: `url(assets/${eventData.imageFileName})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        ></div>
        <div className="container">
          <p>{eventData.beachName}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
