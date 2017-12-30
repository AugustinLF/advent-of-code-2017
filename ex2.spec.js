const {
    calculateRowMinMaxCheckSum,
    calculateRowDividedCheckSum,
    calculateSpreadsheetMinMaxCheckSum,
    calculateSpreadsheetDivisionCheckSum,
    parsePuzzleInput,
} = require("./ex2");

describe("ex2.1", () => {
    describe("calculateRowMinMaxCheckSum", () => {
        it("5 1 9 5", () => {
            expect(calculateRowMinMaxCheckSum([5, 1, 9, 5])).toBe(8);
        });
        it("7 5 3", () => {
            expect(calculateRowMinMaxCheckSum([7, 5, 3])).toBe(4);
        });
        it("2 4 6 8", () => {
            expect(calculateRowMinMaxCheckSum([2, 4, 6, 8])).toBe(6);
        });
    });
    it("calculateSpreadsheetMinMaxCheckSum", () => {
        const spreadsheet = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
        expect(calculateSpreadsheetMinMaxCheckSum(spreadsheet)).toBe(18);
    });
    it("should compute the puzzle input checksum", () => {
        const spreadsheet = parsePuzzleInput("./ex2.txt");
        expect(calculateSpreadsheetMinMaxCheckSum(spreadsheet)).toBe(45158);
    });
});

describe("ex2.2", () => {
    describe("calculateRowDividedCheckSum", () => {
        it("5 9 2 8", () => {
            expect(calculateRowDividedCheckSum([5, 9, 2, 8])).toBe(4);
        });
        it("9 4 7 3", () => {
            expect(calculateRowDividedCheckSum([9, 4, 7, 3])).toBe(3);
        });
        it("3 8 6 5", () => {
            expect(calculateRowDividedCheckSum([3, 8, 6, 5])).toBe(2);
        });
    });
    it("should compute the puzzle input checksum", () => {
        const spreadsheet = parsePuzzleInput("./ex2.txt");
        expect(calculateSpreadsheetDivisionCheckSum(spreadsheet)).toBe(294);
    });
});
