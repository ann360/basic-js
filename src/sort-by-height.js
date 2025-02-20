const { NotImplementedError } = require("../extensions/index.js");
function sortByHeight(arr) {
  const sortedValues = arr.filter((x) => x !== -1).sort((a, b) => a - b);
  let index = 0;
  return arr.map((x) => (x === -1 ? x : sortedValues[index++]));
}

module.exports = {
  sortByHeight,
};
