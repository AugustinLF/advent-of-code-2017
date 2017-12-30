const {calculateRowCheckSum, calculateSpreadsheetCheckSum, parsePuzzleInput} = require("./ex2");

describe("ex2.1", () => {
    describe("calculateRowCheckSum", () => {
        it("5 1 9 5", () => {
            expect(calculateRowCheckSum([5, 1, 9, 5])).toBe(8);
        });
        it("7 5 3", () => {
            expect(calculateRowCheckSum([7, 5, 3])).toBe(4);
        });
        it("2 4 6 8", () => {
            expect(calculateRowCheckSum([2, 4, 6, 8])).toBe(6);
        });
    });
    it("calculateSpreadsheetCheckSum", () => {
        const spreadsheet = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
        expect(calculateSpreadsheetCheckSum(spreadsheet)).toBe(18);
    });
    it("should compute the puzzle input checksum", () => {
        const spreadsheet = parsePuzzleInput("./ex2.txt");
        expect(calculateSpreadsheetCheckSum(spreadsheet)).toBe(45158);
    });
});
