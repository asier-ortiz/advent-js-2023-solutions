/*
Points: 260
OPS/S : 2058
Cognitive complexity: 4
 */

function createChristmasTree(ornaments, height) {
    let lastOrnamentIndex = 0;
    let output = "";

    for (let i = 0; i < height; i++) {
        let spaces = ' '.repeat(height - 1 - i);
        let row = "";

        for (let j = 0; j < i + 1; j++) {
            row += ornaments[lastOrnamentIndex++ % ornaments.length] + " ";
        }

        output += spaces + row.trimEnd() +
            (i === height - 1 ?
                '\n' + ' '.repeat((row.length - 1) / 2) + '|\n' :
                '\n');
    }

    return output;
}

console.log(createChristmasTree("x", 3))
console.log(createChristmasTree("123", 5))
console.log(createChristmasTree("xo", 4))
console.log(createChristmasTree("*@o", 3));
console.log(createChristmasTree("123", 4));
console.log(createChristmasTree("123", 5));
console.log(createChristmasTree("123", 6));
console.log(createChristmasTree("123", 7));
console.log(createChristmasTree("123", 8));
console.log(createChristmasTree("123", 9));


