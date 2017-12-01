const parseInput = input => input.split("");

const computeElemValue = (a, b) => (a === b ? Number(a) : 0);
const computeConsecutiveValue = (total, first, list) => {
    if (list.length === 0) return total;
    if (list.length === 1) return total + computeElemValue(list[0], first);

    const newTotal = computeElemValue(list[0], list[1]) + total;
    const newList = list.slice(1, list.length);
    return computeConsecutiveValue(newTotal, first, newList);
};

const getSum = input => {
    const list = parseInput(input);
    return computeConsecutiveValue(0, list[0], list);
};
const getHalfwaySum = input => {
    const list = parseInput(input);
    const first = list.slice(0, list.length / 2);
    const second = list.slice(list.length / 2, list.length);

    return (
        first.reduce((total, value, index) => total + computeElemValue(value, second[index]), 0) * 2
    );
};
module.exports = {
    getSum,
    getHalfwaySum,
};
