import React, { useEffect, useMemo } from "react";
import buildRpmMatrix from "./calculations/buildRpmMatrix";
import calculateSpeed from "./calculations/calculateSpeed";
import formatData from "./calculations/formatData";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function App({ values, gearFormFields }) {
  let rpmMatrix;

  const memoizedRpmMatrix = useMemo(() =>
    buildRpmMatrix(values.maxRpm, rpmMatrix)
  );

  const memoizedSpeedMatrix = useMemo(() =>
    calculateSpeed(
      values.rearWheelSize,
      values.finalGearRatio,
      values.primaryGear,
      gearFormFields,
      memoizedRpmMatrix
    )
  );

  const memoizedFormattedDataMatrix = useMemo(() =>
    formatData(memoizedSpeedMatrix, memoizedRpmMatrix)
  );

  console.log(memoizedFormattedDataMatrix);

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
      width={900}
      height={600}
      data={memoizedFormattedDataMatrix}
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
      <Tooltip reversed />
      <Legend reversed />
      {memoizedSpeedMatrix.map((element, index) => {
        let i = memoizedSpeedMatrix.length;
        return (
          <Line
            key=""
            type="monotone"
            dataKey={`gear${i - index}`}
            stroke="#000000"
          />
        );
      })}
    </LineChart>
  );
}
