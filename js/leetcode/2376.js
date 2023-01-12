function countSpecialNumbers(N) {
    let ret = 0;
    const s = N.toString();
    const m = s.length;
    for (let l = 1; l < m; l++) {
        const num = a(10, l) - a(9, l - 1);
        ret += num;
    }

    const visited = new Set();
    dfs(s, 0, visited);
    return ret;

    function dfs(s, i, visited) {
        const n = s.length;
        if (i >= n) {
            ret += 1;
            return;
        }
        for (let d = 0; d < 10; d++) {
            if (visited.has(d) || (i === 0 && d === 0)) continue;

            if (d < Number(s[i])) {
                ret += a(10 - (i + 1), n - 1 - i);
            } else if (d === Number(s[i])) {
                visited.add(d);
                dfs(s, i + 1, visited);
                visited.delete(d);
            }
        }
    }
}
function a(m, k) {
    if (k == 0) return 1;
    let ret = 1;
    for (let i = 0; i < k; i++) ret *= m - i;
    return ret;
}

countSpecialNumbers(321)