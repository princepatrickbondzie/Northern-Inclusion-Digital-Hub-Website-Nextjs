import React from "react";
import Navigation from "../../components/Navigation";
import Header from "./components/Header/index";
import Services from "./components/Services";
import Software from "./components/Software";
import Mobile from "./components/mobile";
import DigitalMedia from "./components/media";
import Team from "./components/team";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Services />
      <Software />
      <Mobile />
      <DigitalMedia />
      <Team />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
