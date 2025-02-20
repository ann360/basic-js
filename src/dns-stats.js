const { NotImplementedError } = require("../extensions/index.js");
function getDNSStats(domains) {
  const stats = {};

  for (const domain of domains) {
    const parts = domain.split(".").reverse();
    let current = "";

    for (const part of parts) {
      current += `.${part}`;
      stats[current] = (stats[current] || 0) + 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats,
};
