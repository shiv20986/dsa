/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    const map = new Map();
    matrix.forEach(row => {
        const key = row[0] === 0
            ? row.join('')
            : row.map(v => v ^ 1).join('');
        map.set(key, (map.get(key) || 0) + 1);
    });
    return Math.max(...map.values());
};