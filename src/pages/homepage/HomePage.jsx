import React from "react";
import AreaChart from "../../components/areachart/AreaChart";
import SpotlightedInfo from "../../components/spotlightedInfo/SpotlightedInfo";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="homepage">
      <SpotlightedInfo />
      <AreaChart width={props.width} />
    </div>
  );
}

export default HomePage;
