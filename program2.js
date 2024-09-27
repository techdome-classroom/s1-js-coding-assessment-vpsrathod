const decodeTheRing = function (s, p) {
    let memo = {};

    function dfs(i, j) {
        if (memo.hasOwnProperty(`${i},${j}`)) return memo[`${i},${j}`];
        if (i === s.length && j === p.length) return true;
        if (j === p.length) return false;

        let match = i < s.length && (s[i] === p[j] || p[j] === '?');

        if (p[j] === '*') {
            memo[`${i},${j}`] = dfs(i, j + 1) || (i < s.length && dfs(i + 1, j));
        } else {
            memo[`${i},${j}`] = match && dfs(i + 1, j + 1);
        }

        return memo[`${i},${j}`];
    }

    return dfs(0, 0);
};

module.exports = decodeTheRing;
