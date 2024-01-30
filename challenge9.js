/*
Points: 330
OPS/S : 3220
Cognitive complexity: 7
 */

function adjustLights(lights) {
    const greenCount = lights.filter(l => l === '🟢').length;
    const redCount = lights.length - greenCount;
    let changesCount = 0;

    if (redCount > greenCount && lights[0] === '🟢') {
        lights[0] = '🔴';
        changesCount++;
    }

    for (let i = 1; i < lights.length; i++) {
        if (lights[i] === lights[i - 1]) {
            changesCount++;
            lights[i] = lights[i] === '🔴' ? '🟢' : '🔴';
        }
    }

    return changesCount;
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])) // 1
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])) // 2
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])) // 0
console.log(adjustLights(['🔴', '🔴', '🔴'])) // 1
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴', '🔴'])); // 3
console.log(adjustLights(['🟢', '🔴', '🔴', '🔴', '🟢', '🟢', '🟢', '🟢'])); // 3
console.log(adjustLights(['🟢', '🔴', '🔴', '🟢', '🟢', '🟢'])); // 3




