import React from "react";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-16 lg:space-y-24">
      <Banner />
      <Feature />
    </div>
  );
};

export default Home;
