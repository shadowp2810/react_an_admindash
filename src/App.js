import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import SideNavBar from "./components/sidenavbar/SideNavBar";
import TopNavBar from "./components/topnavbar/TopNavBar";
import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div>
      <TopNavBar />
      <div className="container">
        <SideNavBar width={width} />
        <div className="otherstuff">Other Stuff</div>
      </div>
    </div>
  );
}

export default App;

// import Button from "@mui/material/Button";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
// import { LineChart, Line } from "recharts";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
