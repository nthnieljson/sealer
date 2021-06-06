import React from "react";
import EventListLong from "../components/Events/EventListLong";
import EventListShort from "../components/Events/EventListShort";

const Events = () => {
  const eventsIDs = [
    [0, 3, 4, 2],
    [1, 5, 6, 7],
    [2, 6, 3, 0],
  ];

  return (
    <div>
      <div className="container mt-5">
        <div className="search-input-container d-flex align-items-center">
          <img src="assets/search-icon.png" alt="search" />
          <input
            className="search-input ml-3"
            style={{
              border: "none",
              fontSize: "1.5rem",
            }}
            placeholder="Search for events"
          />
        </div>
        <div className="mt-5">
          <EventListLong />
        </div>
        <h3 className="events-h3 m-0 p-0 mt-5">Search results</h3>
        <h4 className="events-h4 m-0 p-0 mt-2 mb-3">Showing 1.234 queris</h4>
        {eventsIDs.map((eventIDs, idx) => {
          return (
            <div key={idx} className="mb-3">
              <EventListShort ids={eventIDs} />
            </div>
          );
        })}
      </div>
      <style>
        {`
            .search-input-container {
                padding: .5rem 2rem;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
                border-radius: 10px;
            }
            .search-input::placeholder {
                color: #c7c7c7;
                font-size: 1.5rem;
            }

            .search-input:focus {
                outline: none;
            }

            .events-h3 {
                font-size: 1.75rem;
                font-weight: 600;                
            }

            .events-h4 {
                font-size: 1rem;
            }
          `}
      </style>
    </div>
  );
};

export default Events;
