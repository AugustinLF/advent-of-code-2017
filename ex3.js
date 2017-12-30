const getRingMax = ring => {
    const base = ring * 2 - 1;
    return base * base;
};
const computeRing = number => {
    let ring = 1;
    let prevRingMax = 0;
    while (true) {
        const upperBoundary = getRingMax(ring);

        if (number <= upperBoundary) {
            const min = prevRingMax + 1;
            // console.log(`ring: ${ring}, min: ${min}, max: ${upperBoundary}`);

            return {ring, min, max: upperBoundary};
        }
        prevRingMax = upperBoundary;
        ring++;
    }

    throw new Error("Could not compute ring");
};
const computeShortestPath = number => {
    // There are some weird edge cases with the first ring, it's easier to ignore it
    if (number === 1) return 0;

    const {ring, min, max} = computeRing(number);
    let ringElements = [];
    for (let i = min; i <= max; i++) ringElements.push(i);
    const pos = ringElements.findIndex(el => el === number);

    // The spiral makes a ring a square, and once on the correct ring, the cursor moves on one! side
    // The rationalPos starts at a corner of the square + 1, it's because the bottom right element
    // of the square is the list one, while the one above (hence + 1) is the first one
    const sectionLength = ringElements.length / 4;
    const rationalPos = pos % sectionLength;

    const squareSidePos = rationalPos + 1; // see above comment

    // The cursor starts at the middle of the square (sectionLength / 2)
    const ringMoves = squareSidePos - sectionLength / 2;

    const outwardMoves = ring - 1;

    return outwardMoves + ringMoves;
};
module.exports = {
    computeShortestPath,
    computeRing,
};
