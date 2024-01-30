/*
Points: 160
OPS/S : 1824
Cognitive complexity: 3
 */

function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const optimized = [intervals[0]];

    for (const interval of intervals) {
        const prev = optimized[optimized.length - 1];

        if (interval[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], interval[1]);
        } else {
            optimized.push(interval);
        }
    }

    return optimized;
}

console.log(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
])); // [[2, 8]]

console.log(optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
])); // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
])); // [[1, 2], [3, 4], [5, 6]]

console.log(optimizeIntervals([
    [1, 15],
    [8, 12],
    [4, 7]
])); // [[1, 15]
