/*
Points: 210
OPS/S : 2450
Cognitive complexity: 6
 */

/**
 * Checks if the given original array and copy array are valid copies.
 *
 * @param {Array} original - The original array.
 * @param {Array} copy - The copy array to be checked.
 * @returns {boolean} - Returns true if the copy is a valid copy of the original, false otherwise.
 */
function checkIsValidCopy(original, copy) {
    return [...original].every((element, i) => {
        if (/^[a-zA-Z ]$/.test(element)) {
            return !(element === " " && copy[i] !== " ") &&
                (element.toLowerCase() === copy[i] ||
                    ["#", "+", ":", ".", " "].includes(copy[i]));
        }
        return true;
    });
}

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')); // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false (for the initial p)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false (there is a # where it should not be)
console.log(checkIsValidCopy('Santa Claus', '###:. c:+##')); // true
console.log(checkIsValidCopy('Santa Claus', 'sant##claus+')); // false
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false
console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')); // true
