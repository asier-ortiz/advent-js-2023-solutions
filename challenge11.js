/*
Points: 150
OPS/S : 2229
Cognitive complexity: 10
 */

function getIndexsForPalindrome(word) {
    const length = word.length;

    const isPalindrome = word => {
        for (let i = 0; i < length / 2; i++)
            if (word[i] !== word[length - 1 - i]) return false;
        return true;
    };

    if (isPalindrome(word)) return [];

    const letters = [...word];

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            [letters[i], letters[j]] = [letters[j], letters[i]];
            if (isPalindrome(letters)) return [i, j];
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
    }

    return null;
}

console.log(getIndexsForPalindrome('anna')); // []
console.log(getIndexsForPalindrome('abab')); // [0, 1]
console.log(getIndexsForPalindrome('abac')); // null
console.log(getIndexsForPalindrome('aaaaaaaa')); // []
console.log(getIndexsForPalindrome('aaababa')); // [1, 3]
console.log(getIndexsForPalindrome('caababa')); // null
