const {parseFile} = require("./parseFile");
const getLineMinMax = line => [Math.min(...line), Math.max(...line)];
const calculateRowMinMaxCheckSum = line => {
    const [min, max] = getLineMinMax(line);
    return max - min;
};
const calculateRowDividedCheckSum = line => {
    const sortedLine = [...line].sort((a, b) => a - b);
    for (let i = sortedLine.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const first = sortedLine[i];
            const second = sortedLine[j];
            const divisionResult = first / second;
            if (Number.isInteger(divisionResult)) return divisionResult;
        }
    }
    throw new Error("No number found");
};

const getSpreadsheetCheckSumCalculator = calculateRowCheckSum => spreadsheet =>
    spreadsheet.reduce((sum, line) => sum + calculateRowCheckSum(line), 0);

const calculateSpreadsheetMinMaxCheckSum = getSpreadsheetCheckSumCalculator(
    calculateRowMinMaxCheckSum
);
const calculateSpreadsheetDivisionCheckSum = getSpreadsheetCheckSumCalculator(
    calculateRowDividedCheckSum
);

const parsePuzzleInput = input =>
    parseFile(input)
        .split("\n")
        .map(line => line.split("\t").map(cell => Number(cell)));

module.exports = {
    getLineMinMax,
    calculateRowDividedCheckSum,
    calculateRowMinMaxCheckSum,
    calculateSpreadsheetMinMaxCheckSum,
    calculateSpreadsheetDivisionCheckSum,
    parsePuzzleInput,
};
