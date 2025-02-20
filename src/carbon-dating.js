const { NotImplementedError } = require("../extensions/index.js");
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || !sampleActivity.trim()) {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY) {
    return false;
  }

  const age =
    (Math.log(MODERN_ACTIVITY / activity) / Math.log(2)) * HALF_LIFE_PERIOD;
  return Math.ceil(age);
}

module.exports = {
  dateSample,
};
