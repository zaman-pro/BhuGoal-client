import React from "react";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Faq from "./Faq/Faq";
import TopSubjects from "./TopSubjects/TopSubjects";
import Feedback from "./Feedback/Feedback";
import GetTheApp from "./GetTheApp/GetTheApp";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-16 lg:space-y-24 min-h-screen">
      <Banner />
      <Feature />
      <TopSubjects />
      <GetTheApp />
      <Feedback />
      <Faq />
    </div>
  );
};

export default Home;
