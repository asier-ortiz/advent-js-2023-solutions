/*
Points: 370
OPS/S : 3008
Cognitive complexity: 3
 */

function manufacture(gifts, materials) {
    const matsLetters = [...materials];

    return gifts.filter(gift => {
            const giftLetters = [...gift];
            return giftLetters.every(letter => matsLetters.includes(letter));
        }
    );
}

const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
console.log(manufacture(gifts3, materials3)); // []
