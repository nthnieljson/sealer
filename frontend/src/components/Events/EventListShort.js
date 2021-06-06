import React from "react";
import EventPreviewLong from "./EventPreviewLong";

const EventListShort = () => {
  const helper = [0, 1, 2, 3];
  return (
    <div className="row">
      {helper.map((_) => {
        return (
          <div className="col-3">
            <EventPreviewLong />
          </div>
        );
      })}
    </div>
  );
};

export default EventListShort;
