/*
Points: 100
OPS/S : 1068
Cognitive complexity: 7
 */

function transformTree(tree) {
    const createTree = (index) => {
        if (index >= tree.length || tree[index] === null) return null;

        return {
            value: tree[index],
            left: createTree(2 * index + 1),
            right: createTree(2 * index + 2)
        };
    }

    let output = createTree(0);
    return output;
}

console.log(transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10]));
console.log(transformTree([3, 1, 0, 8, 12, null, 1]));

let example = {
    value: 3,
    left: {
        value: 1,
        left: {
            value: 8,
            left: null,
            right: null
        },
        right: {
            value: 12,
            left: null,
            right: null
        }
    },
    right: {
        value: 0,
        left: null,
        right: {
            value: 1,
            left: null,
            right: null
        }
    }
}



