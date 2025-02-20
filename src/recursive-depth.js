const { NotImplementedError } = require("../extensions/index.js");
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let maxDepth = 1;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const depth = this.calculateDepth(item) + 1;
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
