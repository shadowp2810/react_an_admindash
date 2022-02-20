import React from "react";

import "./SpotlightedInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

function SpotlightedInfo(props) {
  return (
    <div className="spotlighted">
      <div className="spotlightedItem">
        <span className="spotlightedTitle">Revenue</span>
        <div className="spotlightedMoneyContainer">
          <span className="spotlightedMoney">$3,786</span>
          <span className="spotlightedMoneyRate">
            -14.7 <ArrowUpward className="spotlightedIcon negative" />
          </span>
        </div>
        <span className="spotlightedSub">This Month</span>
      </div>

      <div className="spotlightedItem">
        <span className="spotlightedTitle">Sales</span>
        <div className="spotlightedMoneyContainer">
          <span className="spotlightedMoney">$5,543</span>
          <span className="spotlightedMoneyRate">
            -12.4 <ArrowUpward className="spotlightedIcon negative" />
          </span>
        </div>
        <span className="spotlightedSub">This Month</span>
      </div>

      <div className="spotlightedItem">
        <span className="spotlightedTitle">Cost</span>
        <div className="spotlightedMoneyContainer">
          <span className="spotlightedMoney">$6,978</span>
          <span className="spotlightedMoneyRate">
            +5.9 <ArrowUpward className="spotlightedIcon" />
          </span>
        </div>
        <span className="spotlightedSub">This Month</span>
      </div>
    </div>
  );
}

export default SpotlightedInfo;
