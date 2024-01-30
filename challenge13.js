/*
Points: 240
OPS/S : 4
Cognitive complexity: 2135
 */

function calculateTime(deliveries) {

    const totalSeconds = deliveries.reduce((total, delivery) => {
        const [hours, minutes, seconds] = delivery.split(':').map(Number);
        return total + hours * 3600 + minutes * 60 + seconds;
    }, 0);

    const remainingSeconds = 7 * 3600 - totalSeconds;
    const absRemainingSeconds = Math.abs(remainingSeconds);
    const sign = remainingSeconds === 0 ? '' : (remainingSeconds < 0) ? '' : '-';
    const hours = Math.floor(absRemainingSeconds / 3600);
    const minutes = Math.floor((absRemainingSeconds % 3600) / 60);
    const seconds = absRemainingSeconds % 60;

    return `${sign}${[
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':')}`;
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])); // '-05:29:00'

console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']));
// '00:00:00
