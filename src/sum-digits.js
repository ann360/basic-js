const { NotImplementedError } = require("../extensions/index.js");
function getSumOfDigits(n) {
  while (n >= 10) {
    n = String(n)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return n;
}

module.exports = {
  getSumOfDigits,
};
