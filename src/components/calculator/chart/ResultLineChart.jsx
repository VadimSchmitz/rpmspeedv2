import React, { useEffect } from "react";
import buildRpmMatrix from "./calculations/buildRpmMatrix";
import calculateSpeed from "./calculations/calculateSpeed";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function App({ values }) {
  let rpmMatrix;
  let speedMatrix;

  useEffect(() => {
    console.log("submitted toogle");
  }, []);

  const data = [
    {
      rpm: 0,
      speed: 0,
      speed1: 0,
    },
    {
      rpm: 100,
      speed: 10,
      speed1: 20,
    },
    {
      rpm: 200,
      speed: 20,
      speed1: 30,
    },
  ];

  return (
    <LineChart
      layout="horizontal"
      width={500}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="rpm" type="category" />
      <YAxis type="number" />
      <Tooltip />
      <Legend />
      <Line dataKey="speed" stroke="#8884d8" />
      <Line dataKey="speed1" stroke="#82ca9d" />
    </LineChart>
  );
}
