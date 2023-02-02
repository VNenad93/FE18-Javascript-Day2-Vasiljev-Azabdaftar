let favoriteFoods = [
    "pizza",
    "hamburger",
    "ice cream",
    "chocolate"
];

function randomFood(myArray) {
    return myArray[Math.floor(Math.random() * 4)];
}

//console.log(randomFood(favoriteFoods));
document.write(randomFood(favoriteFoods));