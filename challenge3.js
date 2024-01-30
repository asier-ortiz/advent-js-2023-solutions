/*
Points: 360
OPS/S : 3050
Cognitive complexity: 4
 */

function findNaughtyStep(original, modified) {
    const originalLength = original.length;
    const modifiedLength = modified.length;

    for (let i = 0; i < modifiedLength; i++) {
        if (original[i] !== modified[i]) {
            return originalLength > modifiedLength ? original[i] : modified[i];
        }
    }

    return '';
}

const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''

const original4 = '';
const modified4 = 'a';
console.log(findNaughtyStep(original4, modified4)); // 'a'

const original5 = 'abc';
const modified5 = 'acb';
console.log(findNaughtyStep(original5, modified5)); // 'c'

const original6 = 'x';
const modified6 = '';
console.log(findNaughtyStep(original6, modified6)); // 'x'

