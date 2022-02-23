import React from "react";
import "./WidgetLarge.css";

function WidgetLarge(props) {
  const Button = ({ type }) => {
    return <button className={"widgetlargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlarge">
      <h3 className="widgetlargeTitle">Lastest Transactions</h3>
      <table className="widgetlargeTable">
        <thead>
          <tr className="widgetlargeTableRow">
            <th className="widgetlargeTableHeading">Customer</th>
            <th className="widgetlargeTableHeading ">Date</th>
            <th className="widgetlargeTableHeading amountHeading">Amount</th>
            <th className="widgetlargeTableHeading">Status</th>
          </tr>
        </thead>
        <tbody className="widgetlargeTableBody">
          <tr className="widgetlargeTableRow">
            <td className="widgetlargeTableData">
              <img
                src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                  Math.random() * 100
                )}.jpg`}
                alt=""
                className="widgetlargeImage"
              />
              <span className="widgetlargeName">Sweet Porkins</span>
            </td>
            <td className="widgetlargeDate">2 Jun 2021</td>
            <td className="widgetlargeAmount">$1468.00</td>
            <td className="widgetlargeStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetlargeTableRow">
            <td className="widgetlargeTableData">
              <img
                src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                  Math.random() * 100
                )}.jpg`}
                alt=""
                className="widgetlargeImage"
              />
              <span className="widgetlargeName">Johnny Appleyard</span>
            </td>
            <td className="widgetlargeDate">2 Jun 2021</td>
            <td className="widgetlargeAmount">$456.00</td>
            <td className="widgetlargeStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetlargeTableRow">
            <td className="widgetlargeTableData">
              <img
                src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                  Math.random() * 100
                )}.jpg`}
                alt=""
                className="widgetlargeImage"
              />
              <span className="widgetlargeName">Chesterfield Hootkins</span>
            </td>
            <td className="widgetlargeDate">2 Jun 2021</td>
            <td className="widgetlargeAmount">$96.00</td>
            <td className="widgetlargeStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetlargeTableRow">
            <td className="widgetlargeTableData">
              <img
                src={`https://randomuser.me/api/portraits/med/men/${Math.floor(
                  Math.random() * 100
                )}.jpg`}
                alt=""
                className="widgetlargeImage"
              />
              <span className="widgetlargeName">Boomer Nugget</span>
            </td>
            <td className="widgetlargeDate">2 Jun 2021</td>
            <td className="widgetlargeAmount">$30789.00</td>
            <td className="widgetlargeStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLarge;
