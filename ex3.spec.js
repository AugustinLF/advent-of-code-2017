const {computeShortestPath, computeRing} = require("./ex3");

describe("ex1", () => {
    /*
    65 64 63  62  61  60  59 58 57
    66 37 36  35  34  33  32 31 56
    67 38 17  16  15  14  13 30 55
    68 39 18   5   4   3  12 29 54
    69 40 19   6   1   2  11 28 53
    70 41 20   7   8   9  10 27 52
    71 42 21  22  23  24  25 26 51
    72 43 44  45  46  47  48 49 50
    73 74 75  76  77  78  79 80 81

    1 -> 1
    2 -> 9 3**
    3 -> 25 5**
    4 -> 49 7**
    5 -> 81 9 **
    */
    describe("computeRing", () => {
        it("1", () => {
            expect(computeRing(1).ring).toBe(1);
        });
        it("8", () => {
            expect(computeRing(8).ring).toBe(2);
        });
        it("12", () => {
            expect(computeRing(12).ring).toBe(3);
        });
        it("25", () => {
            expect(computeRing(25).ring).toBe(3);
        });
        it("26", () => {
            expect(computeRing(26).ring).toBe(4);
        });
        it("33", () => {
            expect(computeRing(33).ring).toBe(4);
        });
        it("80", () => {
            expect(computeRing(80).ring).toBe(5);
        });
        it("82", () => {
            expect(computeRing(82).ring).toBe(6);
        });
    });
    describe("computeShortestPath", () => {
        it("1", () => {
            expect(computeShortestPath(1)).toBe(0);
        });
        it("9", () => {
            expect(computeShortestPath(9)).toBe(2);
        });
        it("12", () => {
            expect(computeShortestPath(12)).toBe(3);
        });
        it("23", () => {
            expect(computeShortestPath(23)).toBe(2);
        });
        it("1024", () => {
            expect(computeShortestPath(1024)).toBe(31);
        });
    });
    it("should compute the number of steps for the puzzle input", () => {
        expect(computeShortestPath(289326)).toBe(419);
    });
});

describe("ex3.2", () => {
    /*
    147  142  133  122   59
    304    5    4    2   57
    330   10    1    1   54
    351   11   23   25   26
    362  747  806

    1(1) -> *
    2(1) -> *
    3(2) -> 1 + 2 top-right
    4(4) -> 1 + 2 + 3
    5(5) -> 1 + 3 top-left
    6(10) -> 5 + 4 + 1
    7(11) -> 6 + 1 bottom-left
    8(23) -> 7 + 6 + 1
    9(25) -> 8 + 1 + 2 bottom-right end ring(2)
    10(26) -> 9 + 2
    11(54) -> 10 + 2
    12(57) -> 11 + 2 + 3
    13(59) -> 12 + 3 top-right
    14(122) -> 13 + 12 + 3
    15(133) -> 14 + 3 + 4
    16(142) -> 15 + 4 + 5
    17(147) -> 16 + 5 top-left
    18(304) -> 17 + 16 + 5
    19(330) -> 18 + 6 + 5
    20(351) -> 19 + 7 + 6
    21(362) -> 20 + 7 bottom-left
    22(747) -> 21 + 20 + 7
    23(806) -> 22 + 8 + 7

    corner -> previous + same corner previous ring
    bottom-right -> previous + same corner previous ring + previous
    */
});
