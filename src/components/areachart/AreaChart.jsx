import React from "react";
import "./AreaChart.css";
import {
  AreaChart as TheAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AreaChart({ width, title, data, xname, dataKey, dataKey2 = null }) {
  let aspect = width > 1024 ? 4 / 1 : 0.8 / 1;

  return (
    <div className="areachart">
      <div className="areachartTitleDiv">
        <span className="areachartTitle">{title}</span>
      </div>
      <ResponsiveContainer
        width="100%"
        aspect={aspect}
        className="responsivecontainer"
      >
        <TheAreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6ADC90" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6ADC90" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DCC96A" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#DCC96A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xname} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#6ADC90"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          {dataKey2 !== null ? (
            <Area
              type="monotone"
              dataKey={dataKey2}
              stroke="#DCC96A"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          ) : (
            <></>
          )}
        </TheAreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaChart;
