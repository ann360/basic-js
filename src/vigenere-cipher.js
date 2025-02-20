const { NotImplementedError } = require("../extensions/index.js");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this.process(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this.process(encryptedMessage, key, "decrypt");
  }

  process(text, key, mode) {
    const result = [];
    let keyIndex = 0;

    for (const char of text.toUpperCase()) {
      if (/[A-Z]/.test(char)) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const shift = keyChar.charCodeAt(0) - "A".charCodeAt(0);
        const base = "A".charCodeAt(0);

        const processedChar =
          mode === "encrypt"
            ? String.fromCharCode(
                ((char.charCodeAt(0) - base + shift) % 26) + base
              )
            : String.fromCharCode(
                ((char.charCodeAt(0) - base - shift + 26) % 26) + base
              );

        result.push(processedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
