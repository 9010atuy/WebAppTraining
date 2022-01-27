'use strict';

function getYearList() {
  const _yearList = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y > currentYear - 100; y--) {
    if (y > 2018) {
      _yearList.push({
        year: y,
        label: `${y} (令和${y - 2018})`,
      });
    } else if (y > 1988) {
      _yearList.push({
        year: y,
        label: `${y} (平成${y - 1988})`,
      });
    } else if (y > 1925) {
      _yearList.push({
        year: y,
        label: `${y} (昭和${y - 1925})`,
      });
    }
  }
  return _yearList;
}

const yearList = getYearList();
export default yearList;
