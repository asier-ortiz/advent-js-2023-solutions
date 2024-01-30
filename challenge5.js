/*
Points: 160
OPS/S : 1583
Cognitive complexity: 4
 */

function cyberReindeer(road, time) {
    const roadSnapshots = [road];
    let nextStep = '.';
    let sledIndex = 0;

    for (let i = 0; i < time - 1; i++) {

        if (i === 4) road = road.replaceAll('|', '*');

        if (road[sledIndex + 1] !== '|') {

            const roadToArray = road.split('');
            roadToArray[sledIndex + 1] = road[sledIndex];
            roadToArray[sledIndex] = nextStep;
            nextStep = road[sledIndex + 1]
            road = roadToArray.join('');
            sledIndex++;
        }

        roadSnapshots.push(road);
    }

    return roadSnapshots;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time);
result.forEach(r => console.log(r))
