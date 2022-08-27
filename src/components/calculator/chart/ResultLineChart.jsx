import React, { useMemo } from "react";
import buildRpmMatrix from "./calculations/buildRpmMatrix";
import calculateSpeed from "./calculations/calculateSpeed";
import formatData from "./calculations/formatData";
import useWindowDimensions from "./hooks/useWindowDimensions";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

  const { width } = useWindowDimensions();
  let chartHeight;
  width < 640 ? (chartHeight = "50%") : (chartHeight = "65%");

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <LineChart
        layout="horizontal"
        width={900}
        height={600}
        data={memoizedFormattedDataMatrix}
        margin={{
          top: 20,
          right: 30,
          left: -10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rpm" type="category" />
        <YAxis type="number" />
        <Tooltip reversed position={{ x: 80, y: 40 }} />
        <Legend />
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
    </ResponsiveContainer>
  );
}
