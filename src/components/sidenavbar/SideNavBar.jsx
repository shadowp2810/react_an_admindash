import React, { useState } from "react";

import "./SideNavBar.css";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";

function SideNavBar(props) {
  let width = props.width;

  if (width > 1024) console.log("Its 1024+", width);
  else console.log("Its not 1024+", width);

  const [addrtype] = useState([
    "Dashboard",
    "Quick Menu",
    "Notifications",
    "Staff",
  ]);

  const [addrtypeNow, setAddrtypeNow] = useState("Dashboard");

  const Add = addrtype.map((Add) => Add);
  // let handleAddrTypeChange = (e) => {
  //   addrtypeNow = addrtype[e.target.value];
  // };

  let showit = true;
  if (width > 1024) showit = true;
  else showit = false;

  console.log(addrtypeNow);

  return (
    <div className="sidenavbar">
      <div className="sidenavbarWrapper">
        {width < 1024 ? (
          <>
            <div className="custom-select-div">
              <select
                onChange={(e) => setAddrtypeNow(addrtype[e.target.value])}
                className="custom-select"
              >
                {Add.map((address, key) => (
                  <option key={key} value={key}>
                    {address}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <></>
        )}
        {showit || addrtypeNow === "Dashboard" ? (
          <div className="sidenavbarMenu">
            <div className="sidenavbarTitleDiv">
              <h3 className="sidenavbarTitle">
                {showit ? "Dashboard" : "▼Dashboard"}
              </h3>
            </div>
            <ul className="sidenavbarList">
              <li className="sidenavbarListItem active">
                <LineStyle className="sidenavbarIcon" />
                Home
              </li>
              <li className="sidenavbarListItem">
                <Timeline className="sidenavbarIcon" />
                Analytics
              </li>
              <li className="sidenavbarListItem">
                <TrendingUp className="sidenavbarIcon" />
                Sales
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
        {showit || addrtypeNow === "Quick Menu" ? (
          <div className="sidenavbarMenu">
            <h3 className="sidenavbarTitle">
              {showit ? "Quick Menu" : "▼QuickMenu"}
            </h3>
            <ul className="sidenavbarList">
              <li className="sidenavbarListItem">
                <PermIdentity className="sidenavbarIcon" />
                Users
              </li>
              <li className="sidenavbarListItem">
                <Storefront className="sidenavbarIcon" />
                Products
              </li>
              <li className="sidenavbarListItem">
                <AttachMoney className="sidenavbarIcon" />
                Transitions
              </li>
              <li className="sidenavbarListItem">
                <BarChart className="sidenavbarIcon" />
                Charts
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
        {showit || addrtypeNow === "Notifications" ? (
          <div className="sidenavbarMenu">
            <h3 className="sidenavbarTitle">
              {showit ? "Notifications" : "▼Notifications"}
            </h3>
            <ul className="sidenavbarList">
              <li className="sidenavbarListItem">
                <MailOutline className="sidenavbarIcon" />
                Mail
              </li>
              <li className="sidenavbarListItem">
                <DynamicFeed className="sidenavbarIcon" />
                Feedback
              </li>
              <li className="sidenavbarListItem">
                <ChatBubbleOutline className="sidenavbarIcon" />
                Messages
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
        {showit || addrtypeNow === "Staff" ? (
          <div className="sidenavbarMenu">
            <h3 className="sidenavbarTitle">{showit ? "Staff" : "▼Staff"}</h3>
            <ul className="sidenavbarList">
              <li className="sidenavbarListItem">
                <WorkOutline className="sidenavbarIcon" />
                Manage
              </li>
              <li className="sidenavbarListItem">
                <Timeline className="sidenavbarIcon" />
                Analytics
              </li>
              <li className="sidenavbarListItem">
                <Report className="sidenavbarIcon" />
                Reports
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}{" "}
      </div>
    </div>
  );
}

export default SideNavBar;
