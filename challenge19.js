/*
Points: 40
OPS/S : 1204
Cognitive complexity: 11
 */

function revealSabotage(store) {
    const rows = store.length;
    const cols = store[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (store[i][j] === "*") {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const tempX = i + x;
                        const tempY = j + y;
                        if (tempX >= 0 && tempY >= 0 &&
                            tempX < rows && tempY < cols &&
                            store[tempX][tempY] !== "*") {
                            ++store[tempX][tempY];
                            store[tempX][tempY] = store[tempX][tempY].toString();
                        }
                    }
                }
            }
        }
    }

    return store;
}

const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
