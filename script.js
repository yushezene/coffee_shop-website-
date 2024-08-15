
const drinks = [
    "Caramel Macchiato",
    "Pumpkin Spice Latte",
    "Mocha Frappuccino",
    "Flat White",
    "Chai Tea Latte",
    "Iced Coffee",
    "Espresso",
    "Green Tea Latte",
    "Vanilla Thickshake",
    "Spanish Latte",
    "Matcha Latte",
    "Strawberry Refresher"
];

let lastSuggestion = '';

function suggestDrink() {
    let randomIndex;
    let suggestion;

    // Loop to ensure the same drink is not suggested consecutively
    do {
        randomIndex = Math.floor(Math.random() * drinks.length);
        suggestion = drinks[randomIndex];
    } while (suggestion === lastSuggestion);

    // Update the suggestion
    document.getElementById("drink-suggestion").textContent = `How about trying our ${suggestion}?`;

    // Store the current suggestion as the last suggestion
    lastSuggestion = suggestion;
}

/* const drinks = [
    "Caramel Macchiato",
    "Pumpkin Spice Latte",
    "Mocha Frappuccino",
    "Flat White",
    "Chai Tea Latte",
    "Iced Coffee",
    "Espresso",
    "Green Tea Latte"
];

function suggestDrink() {
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const suggestion = drinks[randomIndex];
    document.getElementById("drink-suggestion").textContent = `How about trying our ${suggestion}?`;
} */
