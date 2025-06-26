import React from "react";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Faq from "./Faq/Faq";
import TopSubjects from "./TopSubjects/TopSubjects";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-16 lg:space-y-24">
      <Banner />
      <Feature />
      <TopSubjects />
      <Faq />
    </div>
  );
};

export default Home;
