/*
Points: 140
OPS/S : 2117
Cognitive complexity: 11
 */

function autonomousDrive(store, movements) {
    let robotPos = [0, 0];
    let initialPos = [0, 0];
    const movementsMap = {'R': [0, 1], 'L': [0, -1], 'U': [-1, 0], 'D': [1, 0]};
    const rowCount = store.length;
    const columnCount = store[0].length;

    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store[i].length; j++) {
            if (store[i][j] === "!") {
                robotPos = [i, j];
                initialPos = [i, j];
            }
        }
    }

    for (const movement of movements) {
        const newPos = [
            robotPos[0] + movementsMap[movement][0],
            robotPos[1] + movementsMap[movement][1]
        ];

        if (
            newPos[0] >= 0 && newPos[0] < rowCount &&
            newPos[1] >= 0 && newPos[1] < columnCount &&
            (store[newPos[0]].charAt(newPos[1]) === "." ||
                store[newPos[0]].charAt(newPos[1]) === "!")
        ) {
            robotPos = newPos;
        }
    }

    if (initialPos !== robotPos) {
        let row = store[initialPos[0]];
        row = row.substring(0, initialPos[1]) +
            "." +
            row.substring(initialPos[1] + 1);
        store[initialPos[0]] = row;
        row = store[robotPos[0]];
        row = row.substring(0, robotPos[1]) +
            "!" +
            row.substring(robotPos[1] + 1);
        store[robotPos[0]] = row;
    }

    return store;
}

console.log(autonomousDrive(['..!....', '...*.*.',], ['R', 'R', 'D', 'L']));
/*
[
  ".......",
  "...*!*."
]
*/

console.log(autonomousDrive(['..!....'], ['R', 'L']));
// [
//     "..!...."
// ]

console.log(autonomousDrive(['!..', '***'], ['U', 'L']));
// [
//     "!..",
//     "***"
// ]

console.log(autonomousDrive(['*..!..*', '*.....*'], ['R', 'R', 'R', 'D', 'D']));

// [
//     "*.....*",
//     "*....!*"
// ]
