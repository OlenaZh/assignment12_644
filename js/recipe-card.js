const Recipe = {
    title: 'Guacamole',
    servings: 4,
    ingredients: ['3 Avocados',
                  '1 Lime',
                  '1 Teaspoon Salt',
                  '1/2 cup Onion',
                  '3 Tablespoons Cilantro',
                  '2 Diced Tomatoes',
                  '1 Teaspoon Garlic',
                  '1 Pinch Ground Pepper'],
    printRecipe: function () {
        console.log(Recipe.title);
        console.log('Serves: ' + Recipe.servings);
        console.log('Ingredients:');
        for (let i = 0; i < Recipe.ingredients.length; i++) {
            console.log(`- ${Recipe.ingredients[i]}`);
        }
    }
};
Recipe.printRecipe();