const {getSum, getHalfwaySum} = require("./ex1");
const {parseFile} = require("./parseFile");

describe("ex1", () => {
    describe("examples", () => {
        it("1122", () => {
            const result = getSum("1122");
            expect(result).toBe(3);
        });
        it("1111", () => {
            const result = getSum("1111");
            expect(result).toBe(4);
        });
        it("1234", () => {
            const result = getSum("1234");
            expect(result).toBe(0);
        });
        it("91212129", () => {
            const result = getSum("91212129");
            expect(result).toBe(9);
        });
    });
    it("solution", () => {
        const input = parseFile("./ex1-a.txt");
        const result = getSum(input);
        expect(result).toBe(1119);
    });
});

describe("ex1 part 2", () => {
    describe("examples", () => {
        it("1212", () => {
            const result = getHalfwaySum("1212");
            expect(result).toBe(6);
        });
        it("1221", () => {
            const result = getHalfwaySum("1221");
            expect(result).toBe(0);
        });
        it("123425", () => {
            const result = getHalfwaySum("123425");
            expect(result).toBe(4);
        });
        it("123123", () => {
            const result = getHalfwaySum("123123");
            expect(result).toBe(12);
        });
        it("12131415", () => {
            const result = getHalfwaySum("12131415");
            expect(result).toBe(4);
        });
    });
    it("solution", () => {
        const input = parseFile("./ex1-a.txt");
        const result = getHalfwaySum(input);
        expect(result).toBe(1420);
    });
});
