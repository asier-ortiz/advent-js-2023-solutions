/*
Points: 110
OPS/S : 1315
Cognitive complexity: 6
 */

function travelDistance(map) {
    const mapArr = map.split("\n");
    let santaRow, santaCol;
    let childLocations = new Map();
    let totalDistance = 0;

    for (let i = 0; i < mapArr.length; i++) {
        for (let j = 0; j < mapArr[i].length; j++) {
            if (mapArr[i][j] === 'S') {
                santaRow = i;
                santaCol = j;
            } else if (mapArr[i][j] !== "S" && mapArr[i][j] !== ".") {
                childLocations.set(mapArr[i][j], {row: i, col: j});
            }
        }
    }

    childLocations = new Map([...childLocations.entries()].sort());

    for (let [_, location] of childLocations) {
        let childRow = location.row;
        let childCol = location.col;
        let distance = Math.abs(santaRow - childRow) + Math.abs(santaCol - childCol);
        totalDistance += distance;
        santaRow = childRow;
        santaCol = childCol;
    }

    return totalDistance;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`;

const result = travelDistance(map);
console.log(result); // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

const result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2
