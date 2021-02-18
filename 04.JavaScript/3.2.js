const stations = [[5, 0], [3, 3], [5, 2], [6, 1], [2, 4], [0, 1]];

const PeopleBus = (array) => {
  return array.reduce((station, [wentOn, wentOff]) => { return station + wentOn - wentOff; }, 0);
};

console.log(PeopleBus(stations));