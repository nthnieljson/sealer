import React from "react";
import EventListLong from "../components/Events/EventListLong";
import EventListShort from "../components/Events/EventListShort";
import HomeHero from "../components/Home/HomeHero";

const Home = () => {
  return (
    <div>
      <div className="container home">
        <HomeHero />
        <h3 className="home-h3 m-0 p-0 mt-5">Explore</h3>
        <h4 className="home-h4 m-0 p-0 mt-2 mb-3">Events around you..</h4>
        <EventListShort ids={[0, 1, 2, 3]} />

        <h3 className="home-h3 m-0 p-0 mt-5">Things</h3>
        <h4 className="home-h4 m-0 p-0 mt-2 mb-3">
          You might be interested in..
        </h4>
        <div className="mb-5">
          <EventListLong />
        </div>
      </div>
      <style>
        {`
            .home {
                margin-top: 6rem;
            }

            .home-h3 {
                font-size: 1.75rem;
                font-weight: 600;                
            }

            .home-h4 {
                font-size: 1.25rem;
            }
          `}
      </style>
    </div>
  );
};

export default Home;
