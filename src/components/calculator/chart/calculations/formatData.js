const formatData = (memoizedSpeedMatrix, memoizedRpmMatrix) => {
  let arr = [];
  memoizedRpmMatrix.forEach((rpm, i) => {
    arr.push({ rpm: rpm });
    memoizedSpeedMatrix.forEach((speed, j) => {
      arr[i][`gear${j + 1}`] = memoizedSpeedMatrix[j][i];
    });
  });
  return arr;
};

export default formatData;
