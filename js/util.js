
const getRandomInt = (min, max) =>{
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFraction = (min, max, fraction) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min,max] = [max,min];
  }
  const INT = (Math.random() * (max - min )) + min;
  return INT.toFixed(fraction)
};

const getRandomAray = (aray) => {
  let qualitys = [];
  for (let i = 0; i <= getRandomInt(0,aray.length -1); i++) {
    qualitys[i] = aray[i];
  }
  return qualitys;
};
export {getRandomInt, getRandomFraction, getRandomAray};
