const buildRpmMatrix = (maxRpm, rpmMatrix) => {
  let tempMatrix = [];
  for (let i = maxRpm; i > -1; i -= 100) {
    tempMatrix.push(i);
  }
  rpmMatrix = tempMatrix;
  console.log(rpmMatrix.reverse());
  return rpmMatrix.reverse();
};

export default buildRpmMatrix;
