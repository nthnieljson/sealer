import React from "react";
import EventListShort from "../components/Events/EventListShort";
import HomeHero from "../components/Home/HomeHero";

const Home = () => {
  return (
    <div>
      <div className="container home">
        <HomeHero />
        <EventListShort />
      </div>
      <style>
        {`
            .home {
                margin-top: 6rem;
            }
          `}
      </style>
    </div>
  );
};

export default Home;
