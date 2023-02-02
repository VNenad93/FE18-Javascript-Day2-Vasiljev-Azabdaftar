let tempPlus, tempMinus;

tempPlus = Math.random() * 25;
console.log(Math.floor(tempPlus));

tempMinus = Math.random() * (-5);
console.log(Math.floor(tempMinus));

if (tempMinus >= -5 && tempPlus < 10) {
    document.write("The weather is cold");
} else {
    document.write("The weather is moderate");
}