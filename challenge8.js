/*
Points: 210
OPS/S : 2356
Cognitive complexity: 9
 */

function organizeGifts(gifts) {

    const giftsToMap = () => {
        let valuesMap = new Map();
        let slices = gifts.match(/[a-z]+|\d+/gi);

        for (let i = 0; i < slices.length; i += 2) {
            let letter = slices[i + 1];
            let count = Number(slices[i]);
            valuesMap.set(letter, count)
        }

        return valuesMap;
    }

    const giftsMap = giftsToMap();

    return [...giftsMap].reduce((acc, [key, value]) => {
        let remainingGiftsCount = value;

        while (remainingGiftsCount > 0) {
            if (remainingGiftsCount >= 50) {
                const palletsCount = Math.floor(remainingGiftsCount / 50);
                acc += `[${key}]`.repeat(palletsCount);
                remainingGiftsCount %= palletsCount * 50;

            } else if (remainingGiftsCount >= 10) {
                const boxCount = Math.floor(remainingGiftsCount / 10);
                acc += `{${key}}`.repeat(boxCount);
                remainingGiftsCount %= boxCount * 10;

            } else {
                acc += '(' + `${key}`.repeat(remainingGiftsCount) + ')';
                remainingGiftsCount %= 1;
            }
        }
        return acc;

    }, '');

}

const result = organizeGifts('76a11b');
console.log(result);

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)

*/
