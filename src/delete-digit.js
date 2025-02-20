const { NotImplementedError } = require("../extensions/index.js");
function deleteDigit(n) {
  const numStr = n.toString();
  let maxNum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
    const newNum = parseInt(newNumStr, 10);
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
