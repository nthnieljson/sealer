import React from "react";
import { useParams } from "react-router";
import { eventsData } from "../constants/eventsData";

const EventDetail = () => {
  var { id } = useParams();
  id = parseInt(id);
  console.log(typeof id);
  const eventData = eventsData[id];
  return (
    <div>
      <div>
        <p>{eventData.beachName}</p>
      </div>
    </div>
  );
};

export default EventDetail;
