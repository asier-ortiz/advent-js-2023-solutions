/*
Points: 270
OPS/S : 2192
Cognitive complexity: 2
 */

function maxGifts(houses) {
    return houses.reduce(([a, b], house) =>
            [b, Math.max(b, a + house)],
        [0, 0])[1];
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
