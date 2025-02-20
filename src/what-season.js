const { NotImplementedError } = require("../extensions/index.js");
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    throw new Error("Invalid date!");
  }
  try {
    date.getTime(); // Test for invalid date
  } catch {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  if (month < 2 || month === 11) return "winter";
  if (month < 5) return "spring";
  if (month < 8) return "summer";
  return "autumn";
}

module.exports = {
  getSeason,
};
