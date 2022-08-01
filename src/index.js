module.exports = function reverse(n) {
    if (n < 0) {
        return Number([...(-1 * n).toString()].reverse().join(""));
    }
    return Number([...n.toString()].reverse().join(""));
};
