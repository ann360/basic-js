const { NotImplementedError } = require("../extensions/index.js");
function countCats(backyard) {
  let count = 0;
  for (const row of backyard) {
    for (const cell of row) {
      if (cell === "^^") {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats,
};
