// Write an IIFE that fetch recipes from https://dummyjson.com/recipes and print to the console a list
//     of recipe names.

fetch("https://dummyjson.com/recipes").then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json()
}).then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("Fetch done"))