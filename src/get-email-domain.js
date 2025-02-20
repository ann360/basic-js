const { NotImplementedError } = require("../extensions/index.js");
function getEmailDomain(email) {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) {
    return "";
  }
  return email.slice(atIndex + 1);
}

module.exports = {
  getEmailDomain,
};
