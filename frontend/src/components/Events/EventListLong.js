import React from "react";
import EventPreviewShort from "./EventPreviewShort";

const EventListLong = () => {
  const helper = [0, 0, 0, 0, 0, 0];
  return (
    <div className="row">
      {helper.map((_, idx) => {
        return (
          <div className="col-2" key={idx}>
            <EventPreviewShort />
          </div>
        );
      })}
    </div>
  );
};

export default EventListLong;
