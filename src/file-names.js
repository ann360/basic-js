const { NotImplementedError } = require("../extensions/index.js");
function renameFiles(names) {
  const nameCount = {};

  return names.map((name) => {
    let newName = name;
    while (nameCount[newName]) {
      newName = `${name}(${nameCount[name]++})`;
    }
    nameCount[newName] = 1;
    return newName;
  });
}

module.exports = {
  renameFiles,
};
