import React from "react";
import AreaChart from "../../components/areachart/AreaChart";
import SpotlightedInfo from "../../components/spotlightedInfo/SpotlightedInfo";
import "./HomePage.css";
import { usersData } from "../../dummydata/dummydata";

function HomePage(props) {
  return (
    <div className="homepage">
      <SpotlightedInfo />
      <AreaChart
        width={props.width}
        data={usersData}
        title="Users Analytics"
        xname="name"
        dataKey="Active Users"
        dataKey2="pv"
      />
    </div>
  );
}

export default HomePage;
