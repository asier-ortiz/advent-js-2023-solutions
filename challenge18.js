/*
Points: 25
OPS/S : 860
Cognitive complexity: 9
 */

function drawClock(time) {

    const digitMap = {
        '0': ["*** ", "* * ", "* * ", "* * ", "* * ", "* * ", "*** "],
        '1': ["  * ", "  * ", "  * ", "  * ", "  * ", "  * ", "  * "],
        '2': ["*** ", "  * ", "  * ", "*** ", "*   ", "*   ", "*** "],
        '3': ["*** ", "  * ", "  * ", "*** ", "  * ", "  * ", "*** "],
        '4': ["* * ", "* * ", "* * ", "*** ", "  * ", "  * ", "  * "],
        '5': ["*** ", "*   ", "*   ", "*** ", "  * ", "  * ", "*** "],
        '6': ["*** ", "*   ", "*   ", "*** ", "* * ", "* * ", "*** "],
        '7': ["*** ", "  * ", "  * ", "  * ", "  * ", "  * ", "  * "],
        '8': ["*** ", "* * ", "* * ", "*** ", "* * ", "* * ", "*** "],
        '9': ["*** ", "* * ", "* * ", "*** ", "  * ", "  * ", "*** "]
    };

    const result = Array.from({length: 7},
        () => Array(17).fill(" "));

    const digits = [time[0], time[1], time[3], time[4]];

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 4; j++) {
            const digitLines = digitMap[digits[j]][i];
            const offset = j < 2 ? j * 4 : j * 4 + 2;
            for (let k = 0; k < 3; k++) {
                result[i][k + offset] = digitLines[k];
            }
        }
        if (i === 2 || i === 4) {
            result[i][8] = "*";
        }
    }
    result.forEach(row => console.log(row.toString()));
    return result;
}

drawClock('01:30');
/*
[
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]
 */










