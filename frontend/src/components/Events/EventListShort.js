import React from "react";
import EventPreviewLong from "./EventPreviewLong";

const EventListShort = ({ ids }) => {
  return (
    <div className="row">
      {ids.map((id, idx) => {
        return (
          <div className="col-3" key={idx}>
            <EventPreviewLong id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default EventListShort;
