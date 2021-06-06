import React from "react";
import { eventsData } from "../../constants/eventsData";

const EventPreviewLong = () => {
  const eventData = eventsData[0];
  return (
    <div>
      <div className="event-preview-lg">
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
        <p>{`${eventData.beachName} Cleanup, ${eventData.beachProvinceShort}`}</p>
      </div>
      <style>
        {`
            .event-preview-lg{
                background-color: red;
                border-radius: 10px;
            }
          `}
      </style>
    </div>
  );
};

export default EventPreviewLong;
