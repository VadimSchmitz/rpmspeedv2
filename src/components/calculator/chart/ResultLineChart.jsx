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
  width < 640 ? (chartHeight = "61%") : (chartHeight = "70%");

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <LineChart
        layout="horizontal"
        data={memoizedFormattedDataMatrix}
        margin={{
          top: 5,
          right: 45,
          left: -15,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rpm" type="category" />
        <YAxis type="number" />
        <Tooltip position={{ x: 80, y: 40 }} />
        <Legend />
        {memoizedSpeedMatrix.map((element, index) => {
          return (
            <Line
              key=""
              type="monotone"
              dataKey={`gear${index + 1}`}
              stroke="#000000"
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}
