const { NotImplementedError } = require("../extensions/index.js");
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [...arr];
  const discardNext = new Set(); // Track indices to discard due to --discard-next
  const discardPrev = new Set(); // Track indices to discard due to --discard-prev

  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case "--discard-next":
        if (i + 1 < result.length) {
          discardNext.add(i + 1); // Mark the next element for discarding
        }
        result.splice(i, 1); // Remove the control sequence
        i--; // Adjust index after removal
        break;

      case "--discard-prev":
        if (i - 1 >= 0 && !discardNext.has(i - 1)) {
          discardPrev.add(i - 1); // Mark the previous element for discarding
        }
        result.splice(i, 1); // Remove the control sequence
        i--; // Adjust index after removal
        break;

      case "--double-next":
        if (i + 1 < result.length) {
          result.splice(i, 1, result[i + 1]); // Replace control sequence with the next element
        } else {
          result.splice(i, 1); // Remove the control sequence if no next element exists
        }
        break;

      case "--double-prev":
        if (i - 1 >= 0 && !discardNext.has(i - 1)) {
          result.splice(i, 1, result[i - 1]); // Replace control sequence with the previous element
        } else {
          result.splice(i, 1); // Remove the control sequence if no previous element exists
        }
        break;
    }
  }

  // Remove elements marked for discarding
  return result.filter(
    (_, index) => !discardPrev.has(index) && !discardNext.has(index)
  );
}

module.exports = {
  transform,
};
