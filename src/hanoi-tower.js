const { NotImplementedError } = require("../extensions/index.js");
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1; // Minimum number of turns
  const seconds = Math.floor((turns * 3600) / turnsSpeed); // Time in seconds
  return { turns, seconds };
}

module.exports = {
  calculateHanoi,
};
