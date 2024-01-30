/*
Points: 330
OPS/S : 3008
Cognitive complexity: 7
 */

function maxDistance(movements) {
    const greaterThanCount = [...movements].filter(m => m === '>').length;
    const lesserThanCount = [...movements].filter(m => m === '<').length;
    const asteriskCount =
        movements.length - (greaterThanCount + lesserThanCount);

    if (asteriskCount === movements.length) {
        return asteriskCount;

    } else if (greaterThanCount > lesserThanCount) {
        return (greaterThanCount + asteriskCount) - lesserThanCount;

    } else if (lesserThanCount > greaterThanCount) {
        return (lesserThanCount + asteriskCount) - greaterThanCount;

    } else if (greaterThanCount === lesserThanCount) {
        return (greaterThanCount + asteriskCount) - lesserThanCount;

    }
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

const movements4 = '*****'
const result4 = maxDistance(movements4)
console.log(result4) // -> 5

const movements5 = '***<<'
const result5 = maxDistance(movements5)
console.log(result5) // -> 5

const movements6 = '***>>'
const result6 = maxDistance(movements6)
console.log(result6) // -> 5

const movements7 = '<<**>>'
const result7 = maxDistance(movements7)
console.log(result7) // -> 2
