import React from "react";
import donation from "../../assets/donations-1.png";

const EventPreviewShort = () => {
  return (
    <div>
      <div className="event-preview-sh">
        <div
          style={{
            width: "100%",
            height: "100px",
            overflow: "hidden",
            backgroundImage: `url(${donation})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        ></div>
        <div className="event-preview-sh-bottom pt-2 pb-2 pl-4 pr-2">
          <p
            className="p-0 m-0"
            style={{
              fontWeight: "500",
            }}
          >
            Donations
          </p>
        </div>
      </div>
      <style>
        {`
          .event-preview-sh {                
            border-radius: 10px;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
        }
          `}
      </style>
    </div>
  );
};

export default EventPreviewShort;
