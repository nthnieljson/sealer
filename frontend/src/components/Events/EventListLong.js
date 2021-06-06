import React from "react";
import EventPreviewShort from "./EventPreviewShort";

const EventListLong = () => {
  const helper = [0, 0, 0, 0, 0, 0];
  return (
    <div className="row">
      {helper.map((_) => {
        return (
          <div className="col-2">
            <EventPreviewShort />
          </div>
        );
      })}
    </div>
  );
};

export default EventListLong;
