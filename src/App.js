import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import TopNavBar from "./components/topnavbar/TopNavBar";
import SideNavBar from "./components/sidenavbar/SideNavBar";
import HomePage from "./pages/homepage/HomePage";

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
        <HomePage />
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
