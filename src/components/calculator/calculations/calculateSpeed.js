const calculateSpeed = (
  rearWheelSize,
  finalGearRatio,
  primaryGear,
  gearFormFields,
  rpmMatrix
) => {
  return gearFormFields.map((gear) => {
    return rpmMatrix.map((rpm) => {
      return (
        Math.round(
          ((((rpm / gear.gear) * rearWheelSize) / finalGearRatio) * 0.1885) /
            primaryGear
        ) / 100
      );
    });
  });
};

export default calculateSpeed;
