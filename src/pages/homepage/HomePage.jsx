import React from "react";
import AreaChart from "../../components/areachart/AreaChart";
import SpotlightedInfo from "../../components/spotlightedInfo/SpotlightedInfo";
import "./HomePage.css";
import { usersData } from "../../dummydata/dummydata";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from "../../components/widgetlarge/WidgetLarge";

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
      <div className="homepageWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default HomePage;
