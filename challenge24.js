/*
Points: 30
OPS/S : 335
Cognitive complexity: 5
 */

// depth-first search (DFS)
// This new function is a generator function (indicated by the *), and it "yields" each path as soon as it is found.
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

function getStaircasePaths(steps, maxJump) {
    if (steps === 0) return [[]];
    if (steps === 1) return [[steps]];

    let paths = [];

    for (let i = 1; i <= Math.min(steps, maxJump); i++) {
        let subPaths = getStaircasePaths(steps - i, maxJump);
        let updatedSubPaths = subPaths.map(path => [i, ...path]);
        paths = [...paths, ...updatedSubPaths];
    }

    return paths;
}

console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/


