import React from "react";
import "./TopNavBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

function TopNavBar(props) {
  return (
    <div className="topnavbar">
      <div className="topnavbarWrapper">
        <div className="topnavLeft">
          <span className="mainlogo">anAdminDash</span>
        </div>
        <div className="topnavRight">
          <div className="topnavbarIconContainer">
            <Language />
            <div class="dropdown-content">
              <p>English</p>
            </div>
          </div>
          <div className="topnavbarIconContainer">
            <Settings />
            <div class="dropdown-content">
              <p>Lorem</p>
              <p>Ipsum</p>
              <p>Dolor</p>
            </div>
          </div>
          <div className="topnavbarIconContainer">
            <NotificationsNone />
            <span className="topnavIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
