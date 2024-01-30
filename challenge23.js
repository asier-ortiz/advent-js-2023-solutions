/*
Points: 100
OPS/S : 1317
Cognitive complexity: 7
 */

function organizeChristmasDinner(dishes) {

    const ingredientsMap = {};

    dishes.forEach(dish => {
        const [dishName, ...ingredients] = dish;
        ingredients.forEach(ingredient => {
            if (!ingredientsMap[ingredient]) {
                ingredientsMap[ingredient] = [];
            }
            ingredientsMap[ingredient].push(dishName);
        });
    });

    const result = [];

    Object.keys(ingredientsMap).forEach(ingredient => {
        if (ingredientsMap[ingredient].length >= 2) {
            const ingredientDishes = [ingredient, ...ingredientsMap[ingredient].sort()];
            result.push(ingredientDishes);
        }
    });

    result.sort((a, b) => a[0].localeCompare(b[0]));

    return result;
}

const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));

/*
"sauce" is in 2 dishes: "christmas turkey" and "pizza".
"sugar" is in 2 dishes: "cake" and "hot chocolate".
The rest of the ingredients only appear in one dish, so we do not show them.

We show "sauce" first because alphabetically it comes before "sugar".
And the dishes of each ingredient are also alphabetically ordered.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/

