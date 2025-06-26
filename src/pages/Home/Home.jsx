import React from "react";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-16 lg:space-y-24">
      <Banner />
      <Feature />
      <Faq />
    </div>
  );
};

export default Home;
