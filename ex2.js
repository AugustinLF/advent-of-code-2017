const {parseFile} = require("./parseFile");
const getLineMinMax = line => [Math.min(...line), Math.max(...line)];
const calculateRowCheckSum = line => {
    const [min, max] = getLineMinMax(line);
    return max - min;
};
const calculateSpreadsheetCheckSum = spreadsheet =>
    spreadsheet.reduce((sum, line) => sum + calculateRowCheckSum(line), 0);

const parsePuzzleInput = input =>
    parseFile(input)
        .split("\n")
        .map(line => line.split("\t").map(cell => Number(cell)));

module.exports = {
    getLineMinMax,
    calculateRowCheckSum,
    calculateSpreadsheetCheckSum,
    parsePuzzleInput,
};
