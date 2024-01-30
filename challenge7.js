/*
Points: 200
OPS/S : 2118
Cognitive complexity: 10
 */

function drawGift(size, symbol) {
    const results = [];
    let output = "";
    const high = (size * 2) - 1;
    const maxSymbolOccurrences = (high / 2) - 1;

    for (let i = 1; i <= size; i++) {
        let spaces = " ".repeat(size - i);
        let giftFragment = "";
        const giftFragmentLength = size + i - 1;

        if (i === 1) {
            giftFragment = "#".repeat(giftFragmentLength);

        } else if (i > 1 && i < size) {
            let repeatedGiftPattern = "#" + symbol.repeat(maxSymbolOccurrences);
            const timesRepeatedFragmentFits = Math.floor((giftFragmentLength - 1) / repeatedGiftPattern.length);
            const repeatedFragmentString = repeatedGiftPattern.repeat(timesRepeatedFragmentFits);
            const remainingSpaces = giftFragmentLength - repeatedFragmentString.length;
            let remainingSpacesString = "";

            if (remainingSpaces - 2 > 0) {
                remainingSpacesString = "#" +
                    symbol.repeat(remainingSpaces - 2) +
                    "#";

            } else {
                remainingSpacesString = "##";
            }

            giftFragment = repeatedFragmentString + remainingSpacesString;

        } else {
            giftFragment = "#".repeat(size) + symbol.repeat(i - 2) + "#";
        }

        results.push(spaces + giftFragment);
    }

    if (results.length > 1) {
        const halfIndex = (high - results.length) - 1;

        for (let i = halfIndex; i >= 0; i--) {
            const trailingSpacesCount = results[i].split('')
                .filter(char => char.trim() === '')
                .length;
            const row = results[i].trim() + "".repeat(trailingSpacesCount);
            results.push(row)
        }
    }

    results.forEach(row => output += row + '\n');
    return output;
}

console.log(drawGift(4, '+'));
console.log(drawGift(5, '*'));
console.log(drawGift(1, '^'));
console.log(drawGift(2, "&"));
console.log(drawGift(10, "%"));


