/*
Points: 280
OPS/S : 2709
Cognitive complexity: 2
 */

function decode(message) {
    let chunk;
    const regex = /\(([^()]*?)\)/g;

    while ((chunk = regex.exec(message)) !== null) {
        const reversed = chunk[1].split('').reverse().join('');
        message = message.slice(0, chunk.index) + reversed + message.slice(regex.lastIndex);
        regex.lastIndex = 0; // Reset lastIndex due to string modification.
    }

    return message;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
