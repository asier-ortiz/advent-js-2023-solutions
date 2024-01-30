/*
Points: 90
OPS/S : 2929
Cognitive complexity: 14
 */

function compile(code) {
    let result = 0;
    let returnPointIndex = null;
    let goBackIndex = null;
    let shouldCompile = true;

    for (let i = 0; i < code.length; i++) {

        switch (code[i]) {
            case '+':
                if (shouldCompile) result++;
                break;
            case '-':
                if (shouldCompile) result--;
                break;
            case '*':
                if (shouldCompile) result *= 2;
                break;
            case '%':
                returnPointIndex = i;
                break;
            case '<':
                if (returnPointIndex && goBackIndex !== i) {
                    goBackIndex = i;
                    i = returnPointIndex;
                }
                break;
            case '¿':
                shouldCompile = result > 0;
                break;
            case '?':
                shouldCompile = true;
                break;
        }

    }

    return result;
}

console.log(compile('++*-')); // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<')); // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile('++<--')); // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile('++¿+?')); // 3
// 1 + 1 + 1 = 3

console.log(compile('--¿+++?')); // -2
// - 1 - 1 = -2
