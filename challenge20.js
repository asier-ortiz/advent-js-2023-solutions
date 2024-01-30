/*
Points: 40
OPS/S : 118
Cognitive complexity: 11
 */

function distributeGifts(weights) {

    let result = new Array(weights.length)
        .fill(null)
        .map(() => new Array(weights[0].length)
            .fill(null));

    for (let i = 0; i < weights.length; i++) {

        for (let j = 0; j < weights[i].length; j++) {
            let curr = weights[i][j];
            let prev = weights[i][j - 1];
            let next = weights[i][j + 1];
            let above = null;
            let below = null;

            if (i + 1 < weights.length && j < weights[i + 1].length) {
                below = weights[i + 1][j];
            }

            if (i - 1 >= 0 && j < weights[i - 1].length) {
                above = weights[i - 1][j];
            }

            let neighbors = [curr, prev, next, above, below]
                .filter(v => v !== undefined && v !== null);

            let neighborsSum = neighbors.reduce((acc, curr) => acc + curr, 0);

            let average = Math.round(neighborsSum / neighbors.length);

            result[i][j] = average;
        }

    }

    result.forEach(row => console.log(row.toString()));
    return result;
}


const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
]

distributeGifts(input)

// Step by step result of the first few calculations:

// At position [0][0] we have the value 4
// Its neighbors are the values 5 and 6
// (4 + 5 + 6) / 3 = 5

// At position [0][1] we have the value 5
// Its neighbors are the values 4 and 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// At position [0][2] we have the value 1
// Its neighbors are the values 5 and 3
// (1 + 5 + 3) / 3 = 3

// At position [1][0] we have the value 6
// Its neighbors are the values 4, 8
// (6 + 4 + 8 ) / 3 = 6

// At position [1][1] we have the value null
// Its neighbors are the values 5, 6 and 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... and so on with the rest of the positions
//     [
//     [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
//         [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
//         [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
//     ]

// Final result after rounding with Math.round()
//     [
//     [5, 3, 3],
//         [6, 5, 3],
//         [7, 6, 4]
//     ]
