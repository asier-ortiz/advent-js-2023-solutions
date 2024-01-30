/*
Points: 210
OPS/S : 2219
Cognitive complexity: 6
 */

function findBalancedSegment(message) {
    let maxSegmentLength = 0;
    let maxSegment = [];

    for (let i = 0; i < message.length; i++) {
        let ones = 0;
        let zeros = 0;

        for (let j = i; j < message.length; j++) {
            message[j] === 1 ? ones++ : zeros++;

            if (ones === zeros && ((j - i + 1) > maxSegmentLength)) {
                maxSegmentLength = j - i + 1;
                maxSegment = [i, j];
            }
        }
    }

    return maxSegment;
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
//                         |________|
// position of segment:    [2, 5]
// longest balanced
// of 0s and 1s

console.log(findBalancedSegment([1, 1, 0]));
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]));
// no balanced segments: []

console.log(findBalancedSegment([1, 0, 1, 0]));
// [0, 3]

console.log(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])); // [5, 10]
