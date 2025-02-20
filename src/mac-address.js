const { NotImplementedError } = require("../extensions/index.js");
function isMAC48Address(inputString) {
  const macPattern = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;
  return macPattern.test(inputString);
}

module.exports = {
  isMAC48Address,
};
