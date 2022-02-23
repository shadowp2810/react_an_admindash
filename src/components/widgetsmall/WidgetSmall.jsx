import React from "react";
import "./WidgetSmall.css";
import { Visibility } from "@mui/icons-material";

function WidgetSmall(props) {
  return (
    <div className="widgetsmall">
      <span className="widgetsmallTitle">New Members</span>
      <ul className="widgetsmallList">
        <li className="widgetsmallListItem">
          <div className="widgetsmallUserProfile">
            <img
              src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                Math.random() * 100
              )}.jpg`}
              alt=""
              className="widgetsmallImage"
            />
            <div className="widgetsmallUser">
              <span className="widgetsmallUserName">Boomer Nugget</span>
              <span className="widgetsmallUserTitle">Circus Performer</span>
            </div>
          </div>
          <button className="widgetsmallButton">
            <Visibility className="widgetsmallIcon" />
            show
          </button>
        </li>
        <li className="widgetsmallListItem">
          <div className="widgetsmallUserProfile">
            <img
              src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                Math.random() * 100
              )}.jpg`}
              alt=""
              className="widgetsmallImage"
            />
            <div className="widgetsmallUser">
              <span className="widgetsmallUserName">Chesterfield Hootkins</span>
              <span className="widgetsmallUserTitle">Chemist</span>
            </div>
          </div>
          <button className="widgetsmallButton">
            <Visibility className="widgetsmallIcon" />
            show
          </button>
        </li>
        <li className="widgetsmallListItem">
          <div className="widgetsmallUserProfile">
            <img
              src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                Math.random() * 100
              )}.jpg`}
              alt=""
              className="widgetsmallImage"
            />
            <div className="widgetsmallUser">
              <span className="widgetsmallUserName">Johnny Appleyard</span>
              <span className="widgetsmallUserTitle">Career Criminal</span>
            </div>
          </div>
          <button className="widgetsmallButton">
            <Visibility className="widgetsmallIcon" />
            show
          </button>
        </li>
        <li className="widgetsmallListItem">
          <div className="widgetsmallUserProfile">
            <img
              src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                Math.random() * 100
              )}.jpg`}
              alt=""
              className="widgetsmallImage"
            />
            <div className="widgetsmallUser">
              <span className="widgetsmallUserName">Sweet Porkins</span>
              <span className="widgetsmallUserTitle">Sailor</span>
            </div>
          </div>
          <button className="widgetsmallButton">
            <Visibility className="widgetsmallIcon" />
            show
          </button>
        </li>
        <li className="widgetsmallListItem">
          <div className="widgetsmallUserProfile">
            <img
              src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                Math.random() * 100
              )}.jpg`}
              alt=""
              className="widgetsmallImage"
            />
            <div className="widgetsmallUser">
              <span className="widgetsmallUserName">Squids Gooberdapple</span>
              <span className="widgetsmallUserTitle">Magician</span>
            </div>
          </div>
          <button className="widgetsmallButton">
            <Visibility className="widgetsmallIcon" />
            show
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
