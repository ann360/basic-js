const { NotImplementedError } = require("../extensions/index.js");
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const letters = [];
  for (const member of members) {
    if (typeof member === "string") {
      const trimmedName = member.trim();
      if (trimmedName.length > 0) {
        letters.push(trimmedName[0].toUpperCase());
      }
    }
  }

  return letters.sort().join("");
}

module.exports = {
  createDreamTeam,
};
