const { NotImplementedError } = require("../extensions/index.js");
function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const additionStr = String(addition);
  const additionRepeated = Array(additionRepeatTimes)
    .fill(additionStr)
    .join(additionSeparator);

  const strWithAddition = String(str) + additionRepeated;
  const result = Array(repeatTimes).fill(strWithAddition).join(separator);

  return result;
}

module.exports = {
  repeater,
};
