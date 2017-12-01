const fs = require("fs");

const parseFile = fileName => fs.readFileSync(fileName, "utf-8").trim();

module.exports = {
    parseFile,
};
